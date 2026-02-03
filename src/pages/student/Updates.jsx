import React, { useState } from 'react';
import { Bell, Info, X } from 'lucide-react';

const StudentUpdates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotif, setSelectedNotif] = useState(null);

  const notifications = [
    {
      id: 1,
      title: "Attendance Warning: Data Structures",
      message: "Your attendance has dropped below 75%. Immediate action required.",
      time: "2 hours ago",
      urgent: true,
      reason: "Automated system trigger based on daily attendance logs. Threshold: <75%."
    },
    {
      id: 2,
      title: "Mid-Term Exam Schedule Released",
      message: "The schedule for upcoming mid-term exams is now available.",
      time: "1 day ago",
      urgent: false,
      reason: "Sent to all students of Semester 5 Computer Engineering."
    },
    {
      id: 3,
      title: "Library Due Date Reminder",
      message: "Book 'Intro to Algorithms' is due tomorrow.",
      time: "2 days ago",
      urgent: false,
      reason: "Automated library system trigger based on borrow date."
    }
  ];

  const handleWhyClick = (notif) => {
    setSelectedNotif(notif);
    setModalOpen(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Bell className="h-6 w-6 text-sky-600" /> Campus Updates
      </h1>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className={`bg-white p-6 rounded-lg shadow-sm border ${notif.urgent ? 'border-l-4 border-l-red-500 border-t-slate-200 border-r-slate-200 border-b-slate-200' : 'border-slate-200'}`}>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {notif.urgent && <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded font-bold uppercase">Urgent</span>}
                  <span className="text-xs text-slate-500">{notif.time}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{notif.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{notif.message}</p>
              </div>
            </div>
            <button 
              onClick={() => handleWhyClick(notif)}
              className="text-sky-600 hover:text-sky-700 text-xs font-semibold flex items-center gap-1 hover:underline"
            >
              <Info className="h-3 w-3" /> Why Am I Seeing This?
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedNotif && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
              <h3 className="font-bold text-slate-900">Notification Context</h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              <span className="font-semibold text-slate-800">Why you received this:</span>
              <br />
              {selectedNotif.reason}
            </p>
            <div className="flex justify-end">
              <button 
                onClick={() => setModalOpen(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentUpdates;
