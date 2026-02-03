import React from 'react';
import { Briefcase, Code, Video, UserPlus } from 'lucide-react';

const StudentTalent = () => {
  const posts = [
    {
      id: 1,
      name: "Rohan Das",
      role: "Web Developer",
      looking_for: "Hackathon Team",
      skills: ["React", "Node.js", "MongoDB"],
      icon: <Code className="text-sky-600" />
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Video Editor",
      looking_for: "Short Film Project",
      skills: ["Premiere Pro", "After Effects"],
      icon: <Video className="text-pink-600" />
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "UI/UX Designer",
      looking_for: "App Developer for Project",
      skills: ["Figma", "Adobe XD"],
      icon: <Briefcase className="text-purple-600" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Talent Exchange</h1>
        <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
          <UserPlus size={16} /> Post Talent
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center">
                  {post.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{post.name}</h3>
                  <p className="text-xs text-slate-500">{post.role}</p>
                </div>
              </div>
              <span className="bg-sky-50 text-sky-700 text-xs px-2 py-1 rounded font-medium">Available</span>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-slate-600 font-medium mb-2">Looking For:</p>
              <p className="text-sm text-slate-800 bg-slate-50 p-2 rounded border border-slate-100">{post.looking_for}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.skills.map(skill => (
                <span key={skill} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full mt-4 border border-slate-300 text-slate-700 font-medium py-1.5 rounded hover:bg-slate-50 transition-colors text-sm">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentTalent;
