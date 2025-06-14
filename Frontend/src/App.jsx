import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import FrontPage from './pages/FrontPage';
import UserRegister from './pages/user/UserRegister';
import UserLogin from './pages/user/UserLogin';
import ErrorPage from './pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';
import UserProfileUpdate from './pages/user/UserProfileUpdate';
import UserDelete from './pages/user/UserDelete';

function App() {
  const [user, setUser] = useState(null);

  // Load user data on initial mount
  useEffect(() => {
    const info = localStorage.getItem('userInfo');
    if (info) setUser(JSON.parse(info));
  }, []);

  return (
    <Routes>
      {/* Protected Home Page */}
      <Route
        path="/"
        element={<FrontPage />}
      />

      {/* Public Routes */}
      <Route
        path="/userRegister"
        element={<UserRegister />}
      />
      <Route
        path="/userLogin"
        element={<UserLogin onLogin={setUser} />}
      />

      {/* Protected User Profile Update */}
      <Route
        path="/userProfile"
        element={
          <ProtectedRoute>
            <UserProfileUpdate />
          </ProtectedRoute>
        }
      />

      {/* Protected User Deletion */}
      <Route
        path="/userDelete"
        element={
          <ProtectedRoute>
            <UserDelete />
          </ProtectedRoute>
        }
      />
      {/* Catch-All for Unknown Routes */}
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  );
}

export default App;
