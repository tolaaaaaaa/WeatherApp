import Link from 'next/link';

interface UserCardProps {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      city: string;
    };
  };
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
    <div className="p-4 border rounded-md w-full flex flex-col justify-center items-center bg-white/80">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p><strong>שם משתמש:</strong> {user.username}</p>
      <p><strong>אימייל:</strong> {user.email}</p>
      <p><strong>עיר:</strong> {user.address.city}</p>
      <Link href={`/weather?cityName=${user.address.city}`}>
        <p className="text-blue-500">הראה מזג אוויר נוכחי</p>
      </Link>
    </div>
    </div>
  );
}
