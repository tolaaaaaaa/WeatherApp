interface WeatherProps {
    weatherData: {
        name: string;
        main: {
            temp: number;
        };
        weather: {
            description: string;
            icon: string;
        }[];
    } | null;
}

export default function Weather({ weatherData }: WeatherProps) {
    if (!weatherData) {
        return <div className="text-white text-lg font-semibold">בטעינה...</div>;
    }

    return (
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-xs mx-auto text-gray-800 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-2">{weatherData.name}</h2>
            <div className="flex justify-center items-center mb-4">
                <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="אייקון של מזג אוויר"
                    className="w-20 h-20"
                />
                <div className="ml-4">
                    <p className="text-2xl font-semibold">{weatherData.main.temp}°C</p>
                    <p className="capitalize">{weatherData.weather[0].description}</p>
                </div>
            </div>
        </div>
    );
}
