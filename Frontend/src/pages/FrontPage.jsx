import React, { useEffect, useState } from 'react';
import Header from '../components/UserHeader';
import Footer from '../components/Footer';
import axios from 'axios';

const FrontPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (!token) {
      alert('Please log in first.');
      window.location.href = '/userLogin';
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        console.log('Fetched users:', res.data?.users);
        setUsers(res.data?.users || []);
      } catch (err) {
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
            All Registered Users
          </h1>

          {loading ? (
            <p className="text-center text-gray-600">Loading users...</p>
          ) : users.length === 0 ? (
            <p className="text-center text-gray-600">No users found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-5 border border-gray-200 hover:shadow-lg transition duration-300">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {user.fullName}
                  </h2>
                  <p className="text-gray-600">Username: {user.username}</p>
                  <p className="text-gray-600">Email: {user.email}</p>
                  <p className="text-gray-600">UserID: {user.userID}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default FrontPage;
