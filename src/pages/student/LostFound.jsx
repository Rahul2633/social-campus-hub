import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

const StudentLostFound = () => {
  const [activeTab, setActiveTab] = useState('lost');

  const items = [
    {
      id: 1,
      type: 'lost',
      title: "Blue Water Bottle",
      desc: "Milton flask, left in Library Reading Room.",
      date: "Oct 2, 2024",
      location: "Library",
      image: "https://placehold.co/100x100/e2e8f0/64748b?text=Bottle"
    },
    {
      id: 2,
      type: 'found',
      title: "Scientific Calculator",
      desc: "Casio fx-991EX found in Lab 3.",
      date: "Oct 1, 2024",
      location: "Computer Lab 3",
      image: "https://placehold.co/100x100/e2e8f0/64748b?text=Calc"
    },
    {
      id: 3,
      type: 'lost',
      title: "ID Card - Rahul S.",
      desc: "Lost somewhere near the canteen.",
      date: "Today",
      location: "Canteen Area",
      image: "https://placehold.co/100x100/e2e8f0/64748b?text=ID+Card"
    }
  ];

  const filteredItems = items.filter(item => item.type === activeTab);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Lost & Found</h1>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="flex border-b border-slate-200">
          <button 
            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${activeTab === 'lost' ? 'text-red-600 border-b-2 border-red-600 bg-red-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
            onClick={() => setActiveTab('lost')}
          >
            Lost Items
          </button>
          <button 
            className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${activeTab === 'found' ? 'text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
            onClick={() => setActiveTab('found')}
          >
            Found Items
          </button>
        </div>

        <div className="p-6">
           <div className="flex gap-4 mb-6">
             <input type="text" placeholder="Search items..." className="flex-1 border border-slate-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-sky-500" />
             <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium">Report Item</button>
           </div>

           <div className="space-y-4">
             {filteredItems.map(item => (
               <div key={item.id} className="flex gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                 <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md bg-slate-200" />
                 <div className="flex-1">
                   <div className="flex justify-between items-start">
                     <h3 className="font-bold text-slate-800">{item.title}</h3>
                     <span className="text-xs text-slate-400">{item.date}</span>
                   </div>
                   <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                   <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                     <span className="flex items-center gap-1"><MapPin size={12}/> {item.location}</span>
                   </div>
                   <button className="text-sky-600 text-sm font-medium hover:underline">
                     Contact {activeTab === 'lost' ? 'Owner' : 'Finder'}
                   </button>
                 </div>
               </div>
             ))}
             {filteredItems.length === 0 && (
               <div className="text-center py-12 text-slate-500">
                 No items found in this category.
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLostFound;
