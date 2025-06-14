import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { motion } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/userLogin');
  };

  useEffect(() => {
    const fetchUser = () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
        setUser(storedUser || null);
      } catch {
        setUser(null);
      }
    };

    fetchUser();
    window.addEventListener('storage', fetchUser);
    return () => window.removeEventListener('storage', fetchUser);
  }, []);

  const navLinks = [
    { label: 'Dashboard', path: '/' },
    { label: 'Expenses', path: '/expenses' },
    { label: 'Settlements', path: '/settlements' },
    { label: 'Users', path: '/users' },
  ];

  const isLoggedIn = !!user;
  const displayName = user?.username;
  const profileLink = '/userProfile';

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-54 w-auto"
          />
        </Link>

        {/* Menu Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 transition font-medium ${
                  isActive ? 'text-blue-600 font-semibold' : ''
                }`
              }>
              {link.label}
            </NavLink>
          ))}

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/userLogin"
                className="text-gray-700 hover:text-green-600 transition font-medium">
                Login
              </NavLink>
              <NavLink
                to="/userRegister"
                className="text-gray-700 hover:text-purple-600 transition font-medium">
                Sign Up
              </NavLink>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Hi, <strong>{displayName}</strong>
              </span>
              <NavLink
                to={profileLink}
                className="text-gray-700 hover:text-indigo-600 font-medium">
                Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 font-medium">
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white shadow-lg px-4 pb-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition font-medium ${
                    isActive ? 'text-blue-600 font-semibold' : ''
                  }`
                }>
                {link.label}
              </NavLink>
            ))}

            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/userLogin"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-green-600 font-medium">
                  Login
                </NavLink>
                <NavLink
                  to="/userRegister"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 font-medium">
                  Sign Up
                </NavLink>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-600">
                  Hi, <strong>{displayName}</strong>
                </span>
                <NavLink
                  to={profileLink}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-indigo-600 font-medium">
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-left text-red-500 hover:text-red-700 font-medium">
                  Logout
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
