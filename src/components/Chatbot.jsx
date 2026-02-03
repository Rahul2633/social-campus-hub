import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, AlertCircle, Calendar, CheckCircle } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am the JSPM Smart Assistant. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulate response
    setTimeout(() => {
      let responseText = "I can help with attendance, deadlines, and events.";
      const lowerInput = inputText.toLowerCase();
      
      if (lowerInput.includes('attendance')) {
        responseText = "Attendance: 68%. Warning level. Please contact your class coordinator.";
      } else if (lowerInput.includes('exam') || lowerInput.includes('test')) {
        responseText = "Mid-term exams start on Oct 15th. Schedule available in Student Portal.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        responseText = "Greetings! Select an option below or ask a specific question.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: responseText }]);
    }, 800);
  };

  const handleQuickAction = (action) => {
    const userMsg = { id: Date.now(), type: 'user', text: action };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let responseText = "";
      switch (action) {
        case "Check Attendance":
          responseText = "Attendance: 68%. Warning level. You need to attend the next 5 lectures to reach 75%.";
          break;
        case "Assignment Deadlines":
          responseText = "Next Deadline: Data Structures Assignment 3 due tomorrow at 11:59 PM.";
          break;
        case "Upcoming Events":
          responseText = "Event: Tech Symposium on Saturday, 10:00 AM at Main Auditorium.";
          break;
        case "Campus Rules":
          responseText = "Rule #1: ID cards are mandatory. Library closes at 8 PM.";
          break;
        default:
          responseText = "Processing request...";
      }
      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: responseText }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-jspm-primary hover:bg-slate-800 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 z-50 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="font-medium hidden md:inline">AI Help</span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-jspm-primary text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-sky-500 rounded-full flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">JSPM Smart Assistant</h3>
                <p className="text-xs text-slate-300">AI Powered • Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 text-sm ${
                    msg.type === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-2 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
            <QuickBtn icon={<CheckCircle size={14}/>} label="Check Attendance" onClick={() => handleQuickAction("Check Attendance")} />
            <QuickBtn icon={<AlertCircle size={14}/>} label="Assignment Deadlines" onClick={() => handleQuickAction("Assignment Deadlines")} />
            <QuickBtn icon={<Calendar size={14}/>} label="Upcoming Events" onClick={() => handleQuickAction("Upcoming Events")} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your query..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-sky-500"
            />
            <button
              onClick={handleSend}
              className="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-md transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const QuickBtn = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border border-slate-200"
  >
    {icon} {label}
  </button>
);

export default Chatbot;
