import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Book, Calendar, ChevronRight, Clock, Search, Users, User } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Student Dashboard</h1>
           <p className="text-slate-500 mt-1">Welcome back, Rahul • Semester 5</p>
        </div>
        <div className="hidden md:block text-sm bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm font-medium text-slate-600">
          Academic Year 2024-25
        </div>
      </div>

      {/* Urgent Notification Widget */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-xl shadow-sm flex items-start gap-4 animate-in slide-in-from-top-2 duration-500">
        <AlertTriangle className="text-red-600 h-6 w-6 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-red-800">Urgent: Attendance Warning</h3>
          <p className="text-sm text-red-700 mt-1">
            Your attendance in Data Structures is 68% (Below 75%). Please meet the HOD immediately.
          </p>
          <Link to="/student/attendance" className="text-xs font-bold text-red-800 underline mt-2 inline-block hover:text-red-900">
            View Details
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Attendance Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Attendance</h3>
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-bold">Warning</span>
          </div>
          <div className="flex items-center justify-center mb-4">
             <div className="relative h-28 w-28 flex items-center justify-center">
                <svg className="h-full w-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path className="text-red-500" strokeDasharray="68, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold text-slate-800">68%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Avg</span>
                </div>
             </div>
          </div>
          <Link to="/student/attendance" className="block w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2 rounded-lg transition-colors text-sm border border-slate-200">
            View Report
          </Link>
        </div>

        {/* Assignments Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Pending Assignments</h3>
            <span className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded-full font-bold">3 New</span>
          </div>
          <div className="space-y-3 mb-4">
            <AssignmentItem subject="Data Structures" title="Binary Trees Implementation" due="Tomorrow" />
            <AssignmentItem subject="Database" title="SQL Queries Lab" due="2 Days" />
          </div>
          <button className="block w-full text-center text-sky-600 font-medium text-sm hover:underline">
            View All Assignments
          </button>
        </div>

        {/* Quick Links / Campus Life */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl shadow-sm text-white flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-white mb-1">Campus Life</h3>
            <p className="text-slate-400 text-xs mb-6">Quick access to student services</p>
            
            <div className="space-y-3">
              <Link to="/student/lost-found" className="flex items-center gap-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Search className="h-4 w-4 text-sky-400" />
                <span className="text-sm font-medium">Lost & Found</span>
              </Link>
              <Link to="/student/clubs" className="flex items-center gap-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <Users className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium">Student Clubs</span>
              </Link>
              <Link to="/student/talent" className="flex items-center gap-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                <User className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium">Talent Exchange</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upcoming Events Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-800 text-lg">Upcoming Events</h3>
          <Link to="/student/updates" className="text-sky-600 hover:text-sky-700 text-sm font-medium flex items-center gap-1">
            View Calendar <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <EventCard date="12" month="OCT" title="Annual Tech Symposium" time="10:00 AM" location="Main Auditorium" />
          <EventCard date="15" month="OCT" title="Mid-Term Exams Begin" time="09:00 AM" location="Exam Hall" />
          <EventCard date="20" month="OCT" title="Cultural Fest Auditions" time="02:00 PM" location="Amphitheater" />
        </div>
      </div>
    </div>
  );
};

const AssignmentItem = ({ subject, title, due }) => (
  <div className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:border-sky-100 hover:bg-sky-50 transition-all group">
    <div className="bg-sky-100 p-2 rounded-md group-hover:bg-sky-200 transition-colors">
      <Book className="h-4 w-4 text-sky-600" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between">
        <h4 className="text-sm font-bold text-slate-800">{subject}</h4>
        <span className="text-xs text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded">{due}</span>
      </div>
      <p className="text-xs text-slate-500 mt-0.5">{title}</p>
    </div>
  </div>
);

const EventCard = ({ date, month, title, time, location }) => (
  <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 hover:shadow-md transition-all bg-slate-50/50">
    <div className="bg-white border border-slate-200 rounded-lg p-2 text-center min-w-[3.5rem] shadow-sm">
      <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">{month}</span>
      <span className="block text-xl font-black text-slate-900">{date}</span>
    </div>
    <div>
      <h4 className="text-sm font-bold text-slate-900 leading-tight mb-2">{title}</h4>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Clock className="h-3 w-3" /> {time}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Users className="h-3 w-3" /> {location}
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
