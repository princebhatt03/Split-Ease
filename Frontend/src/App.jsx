import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import UserRegister from './pages/user/UserRegister';
import UserLogin from './pages/user/UserLogin';
import ErrorPage from './pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';
import UserProfileUpdate from './pages/user/UserProfileUpdate';
import UserDelete from './pages/user/UserDelete';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const GoogleAuthWrapper = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <UserLogin onLogin={setUser} />
      </GoogleOAuthProvider>
    );
  };

  const GoogleAuthWrapper1 = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <UserRegister />
      </GoogleOAuthProvider>
    );
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const info = localStorage.getItem('userInfo');
    if (info) setUser(JSON.parse(info));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<FrontPage />}
      />
      <Route
        path="/userRegister"
        element={<GoogleAuthWrapper1 />}
      />
      <Route
        path="/userLogin"
        element={<GoogleAuthWrapper />}
      />
      <Route
        path="/userProfile"
        element={
          <ProtectedRoute>
            <UserProfileUpdate />
          </ProtectedRoute>
        }
      />
      <Route
        path="/userDelete"
        element={
          <ProtectedRoute>
            <UserDelete />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  );
}

export default App;
