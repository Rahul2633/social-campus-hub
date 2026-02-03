import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'student';
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Capitalize role for display
  const displayRole = role.charAt(0).toUpperCase() + role.slice(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      login(role, username || 'User');
      setIsLoading(false);
      navigate(`/${role}/dashboard`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Side - Hero/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
             src="/images/jspm-hero.jpg" 
             alt="JSPM Campus" 
             className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-900/50"></div>
        </div>
        
        <div className="relative z-10 p-12 text-white max-w-lg">
          <div className="h-16 w-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
            <span className="font-serif font-black text-4xl">J</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Welcome to <br/> <span className="text-sky-400">Social Campus Hub</span></h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            The official smart digital campus platform for JSPM. Access your academic records, attendance, and campus updates in one secure place.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold">Secure Access</h3>
                <p className="text-sm text-slate-400">Enterprise-grade security for your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-6 lg:px-20 xl:px-32 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-10 group w-fit">
            <div className="h-8 w-8 bg-slate-900 text-white rounded-md flex items-center justify-center font-bold group-hover:bg-sky-600 transition-colors">J</div>
            <span className="font-bold text-slate-900 text-lg">SOCIAL CAMPUS HUB</span>
          </Link>
          
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
            {displayRole} Login
          </h2>
          <p className="text-slate-500 mb-8">
            Please sign in to continue to your dashboard.
          </p>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-slate-700 mb-1">
                Username / Email ID
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all sm:text-sm"
                  placeholder={role === 'student' ? 'e.g. STU123456' : 'e.g. emp.name@jspm.edu'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-sky-600 hover:text-sky-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Sign In <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
             <p className="text-xs text-slate-400">
               By signing in, you agree to the <a href="#" className="underline hover:text-slate-600">Terms of Service</a> and <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
