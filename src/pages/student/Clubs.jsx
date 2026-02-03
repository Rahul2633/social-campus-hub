import React from 'react';
import { Users, Code, Music, Trophy } from 'lucide-react';

const StudentClubs = () => {
  const clubs = [
    {
      id: 1,
      name: "Google Developer Student Club",
      icon: <Code className="h-8 w-8 text-white" />,
      color: "bg-blue-600",
      description: "Community for developers. Learn web, app, and cloud technologies.",
      events: ["Hackathon 2024", "Cloud Workshop"],
      members: 120
    },
    {
      id: 2,
      name: "Cultural Club 'Aarambh'",
      icon: <Music className="h-8 w-8 text-white" />,
      color: "bg-purple-600",
      description: "Dance, Music, Drama, and Arts. Express yourself.",
      events: ["Annual Gathering", "Open Mic Night"],
      members: 85
    },
    {
      id: 3,
      name: "Sports Club",
      icon: <Trophy className="h-8 w-8 text-white" />,
      color: "bg-orange-500",
      description: "Cricket, Football, Basketball, and Indoor games.",
      events: ["Inter-College Tournament", "Morning Yoga"],
      members: 200
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Student Clubs & Communities</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className={`${club.color} p-6 flex justify-center items-center`}>
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                {club.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{club.name}</h3>
              <p className="text-slate-600 text-sm mb-4 min-h-[40px]">{club.description}</p>
              
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Upcoming Events</h4>
                <ul className="space-y-1">
                  {club.events.map((ev, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> {ev}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg transition-colors">
                Join Club
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentClubs;
