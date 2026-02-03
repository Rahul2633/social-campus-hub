import React, { useState } from 'react';
import { useEmergency } from '../../context/EmergencyContext';
import { AlertTriangle, Users, Activity, Database, ShieldAlert, XCircle } from 'lucide-react';

const AdminDashboard = () => {
  const { isEmergency, triggerEmergency, clearEmergency } = useEmergency();
  const [alertText, setAlertText] = useState("Severe Weather Warning. Campus Closed.");

  const handleTrigger = () => {
    triggerEmergency(alertText);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">System Administration</h1>
        <div className="bg-slate-900 text-white px-3 py-1 rounded text-xs font-mono">
          System Status: Online
        </div>
      </div>

      {/* Emergency Control Panel */}
      <div className="bg-white rounded-lg shadow-sm border border-red-100 overflow-hidden">
        <div className="bg-red-50 px-6 py-4 border-b border-red-100 flex items-center gap-2">
          <ShieldAlert className="text-red-600 h-5 w-5" />
          <h2 className="font-bold text-red-900">Emergency Broadcast System</h2>
        </div>
        <div className="p-6">
          <p className="text-sm text-slate-600 mb-4">
            Activating this will display a <span className="font-bold text-red-600">RED BANNER</span> across all student and faculty dashboards immediately. Use with caution.
          </p>
          
          {!isEmergency ? (
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-700 mb-1">Broadcast Message</label>
                <input 
                  type="text" 
                  value={alertText}
                  onChange={(e) => setAlertText(e.target.value)}
                  className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <button 
                onClick={handleTrigger}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold text-sm shadow-sm transition-colors flex items-center gap-2"
              >
                <AlertTriangle className="h-4 w-4" /> BROADCAST ALERT
              </button>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="animate-pulse bg-red-600 h-3 w-3 rounded-full"></div>
                <span className="font-bold text-red-800">Active Alert: "{alertText}"</span>
              </div>
              <button 
                onClick={clearEmergency}
                className="bg-white border border-red-300 text-red-700 hover:bg-red-50 px-4 py-2 rounded-md font-bold text-sm transition-colors flex items-center gap-2"
              >
                <XCircle className="h-4 w-4" /> DEACTIVATE
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        <AnalyticsCard label="Total Students" value="4,250" change="+12%" icon={<Users className="text-sky-600" />} />
        <AnalyticsCard label="Faculty Members" value="320" change="+2%" icon={<Users className="text-emerald-600" />} />
        <AnalyticsCard label="Active Today" value="3,842" change="92%" icon={<Activity className="text-indigo-600" />} />
        <AnalyticsCard label="Database Size" value="2.4 GB" change="Stable" icon={<Database className="text-slate-600" />} />
      </div>

      {/* Recent Login Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-4">Live Login Activity</h3>
        <div className="space-y-3">
          <LogEntry user="Student: STU2451" time="Just now" status="Success" />
          <LogEntry user="Faculty: FAC089" time="2 mins ago" status="Success" />
          <LogEntry user="Admin: SYS_ADM" time="5 mins ago" status="Success" />
          <LogEntry user="Student: STU9921" time="12 mins ago" status="Failed (Wrong Password)" error />
        </div>
      </div>
    </div>
  );
};

const AnalyticsCard = ({ label, value, change, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
    <div className="flex justify-between items-start mb-2">
      <span className="text-slate-500 text-xs font-bold uppercase">{label}</span>
      {icon}
    </div>
    <div className="text-2xl font-bold text-slate-900">{value}</div>
    <div className="text-xs text-green-600 font-medium mt-1">{change}</div>
  </div>
);

const LogEntry = ({ user, time, status, error }) => (
  <div className="flex justify-between items-center text-sm py-2 border-b border-slate-50 last:border-0">
    <span className="font-medium text-slate-700">{user}</span>
    <div className="flex items-center gap-4">
      <span className={`px-2 py-0.5 rounded text-xs ${error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
        {status}
      </span>
      <span className="text-slate-400 text-xs">{time}</span>
    </div>
  </div>
);

export default AdminDashboard;
