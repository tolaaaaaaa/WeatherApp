import Image from 'next/image';
import Link from 'next/link';
import WeatherIcon from '../../public/weathericon.png';

export default function HomePage() {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center h-screen bg-gradient-to-b from-blue-200 via-white to-gray-300 text-center">
      <div className='flex flex-col'>
      <div className='flex flex-row'>
      <h1 className="text-2xl md:text-3xl font-bold">אפליקציית מזג אוויר</h1>
      <Image src={WeatherIcon} alt="אייקון מזג אוויר" width={35} height={35} />
      </div>
      <h2 className="text-lg font-semibold">על ידי שחף שומרוני</h2>
      <Link href="/users" className=''>
        <p className="text-blue-500 border-2 border-black rounded-lg p-2 shadow-sm shadow-black hover:scale-105 transition-all font-bold">למעבר לרשימת המשתמשים</p>
      </Link>
      </div>
    </div>
  );
}
