"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from '@/components/Weather';
import Link from 'next/link';

export default function WeatherPage() {
  const searchParams = useSearchParams();
  const cityName = searchParams.get('cityName') || '';
  const [city, setCity] = useState(cityName);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e647102d244855bea80a39c8013ee072&units=metric`)
        .then(response => setWeatherData(response.data))
        .catch(error => console.error('Error fetching weather:', error));
    }
  }, [city]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <div className="flex flex-col justify-around items-center h-screen gap-2 p-4">
      <h1 className="text-3xl font-bold text-center">מזג אוויר 2024 בעיר {city}.</h1>
      
        <Weather weatherData={weatherData} />
      <div className='flex flex-row gap-3'>
    <Link href="/users"><button className='w-auto p-2 h-12 border border-black rounded-md' >לחזור לרשימת המשתמשים</button></Link>
    <Link href="/"><button className='w-auto p-2 h-12 border border-black rounded-md' >לחזור לדף הראשי</button></Link>
      </div>
    </div>
  );
}
