import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEmergency } from '../context/EmergencyContext';
import { AlertTriangle, Menu, X, User, LogOut, Home, Bell, Calendar, Users, FileText } from 'lucide-react';

const EmergencyBanner = () => {
  const { isEmergency, message } = useEmergency();
  if (!isEmergency) return null;

  return (
    <div className="bg-red-600 text-white px-4 py-3 shadow-md animate-pulse sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm md:text-base">
        <AlertTriangle className="h-5 w-5" />
        <span>{message}</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { label: 'Dashboard', path: `/${user?.role}/dashboard`, icon: Home },
    ...(user?.role === 'student' ? [
      { label: 'Updates', path: '/student/updates', icon: Bell },
      { label: 'Clubs', path: '/student/clubs', icon: Users },
      { label: 'Lost & Found', path: '/student/lost-found', icon: FileText },
    ] : []),
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-40 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-lg shadow-lg flex items-center justify-center font-serif font-black text-xl group-hover:scale-105 transition-transform">J</div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-slate-100">SOCIAL CAMPUS HUB</span>
              <span className="text-[10px] text-sky-400 font-medium tracking-wider">JSPM DIGITAL CAMPUS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {user && navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  location.pathname === link.path 
                  ? 'bg-white/10 text-white shadow-inner' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* User Profile / Logout */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <User className="h-4 w-4" />
                  <span className="capitalize">{user.role}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-medium text-sm transition-colors">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-2 space-y-1">
            {user && navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user ? (
              <button 
                onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-red-300 hover:bg-slate-700"
              >
                Logout
              </button>
            ) : (
              <Link 
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-sky-400 hover:text-sky-300 hover:bg-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

import Chatbot from './Chatbot';

const Layout = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <EmergencyBanner />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mb-16 md:mb-0">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm hidden md:block">
        <p>&copy; 2024 JSPM Social Campus Hub. All Rights Reserved.</p>
      </footer>
      {(user?.role === 'student' || !user) && <Chatbot />}
      {user?.role === 'student' && <StudentBottomNav />}
    </div>
  );
};

const StudentBottomNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 flex justify-around py-3">
      <BottomNavLink to="/student/updates" icon={Bell} label="Updates" />
      <BottomNavLink to="/student/clubs" icon={Users} label="Clubs" />
      <BottomNavLink to="/student/dashboard" icon={Home} label="Home" />
      <BottomNavLink to="/student/lost-found" icon={FileText} label="Lost" />
      <BottomNavLink to="/student/talent" icon={User} label="Talent" />
    </div>
  );
};

const BottomNavLink = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to} className={`flex flex-col items-center gap-1 ${isActive ? 'text-sky-600' : 'text-slate-500'}`}>
      <Icon size={20} />
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
};

export default Layout;
