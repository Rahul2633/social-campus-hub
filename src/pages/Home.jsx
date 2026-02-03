import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BookOpen, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white pt-32 pb-40 px-6 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/jspm-hero.jpg" 
            alt="JSPM Campus" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Smart Digital Campus
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight drop-shadow-2xl">
            Social Campus Hub <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
              JSPM Smart Digital Platform
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Centralized campus communication, safety alerts, academic updates, and AI support for the next generation of education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/roles" 
              className="group bg-sky-600 hover:bg-sky-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-sky-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Access Portal <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#features" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why JSPM Needs This Platform</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Streamlining operations between students, faculty, and administration with enterprise-grade technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-sky-600" />}
              title="Student-Centric"
              description="Real-time updates, attendance tracking, and AI assistance to ensure academic success."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-sky-600" />}
              title="Faculty Management"
              description="Efficient tools for assignment distribution, grading, and performance monitoring."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-sky-600" />}
              title="Admin Control"
              description="Centralized database control, analytics, and emergency broadcast capabilities."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 font-bold text-white text-xl">
            <div className="h-8 w-8 bg-white text-slate-900 rounded-full flex items-center justify-center font-serif font-black">J</div>
            JSPM
          </div>
          <p className="text-sm">© 2024 JSPM Institutes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="bg-sky-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
