"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from '@/components/UserCard';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const usersPerPage = 5;

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <p>בטעינה...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/vidweathe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto p-4 relative z-10 h-full flex flex-col justify-between">
        <div className="flex-grow overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4 text-white">משתמשים</h1>
          <input
            type="text"
            placeholder="חיפוש לפי משתמשים"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border rounded-md mb-4 text-black w-full"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`p-2 mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
