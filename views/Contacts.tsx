
import React from 'react';
import { Mail, Phone, Edit, Trophy } from 'lucide-react';
import { MOCK_CONTACTS } from '../constants';

const Contacts: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <div className="relative p-[1px] rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="bg-[#161f32] px-6 py-2 rounded-xl relative z-10 flex items-center gap-2">
            <Zap className="text-yellow-400" size={16} />
            <span className="text-sm font-bold">Smart Filters Enabled</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_CONTACTS.map((contact, idx) => (
          <div 
            key={contact.id} 
            className={`bg-[#161f32] p-6 rounded-3xl flex items-center justify-between transition-all hover:scale-[1.01] ${
              idx === 0 ? 'border border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.1)]' : 'border border-slate-800'
            }`}
          >
            <div className="flex items-center gap-6">
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="w-16 h-16 rounded-full border-2 border-blue-500/50 p-1" />
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-[#161f32]"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">{contact.name}</h3>
                  {idx === 0 && <Trophy className="text-orange-400" size={18} />}
                </div>
                <p className="text-slate-400 text-sm">{contact.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-12">
              <div className="flex flex-col items-center">
                <div className="relative mb-1">
                  <svg className="w-14 h-14 transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-800" />
                    <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={150} strokeDashoffset={150 - (150 * contact.progress / 100)} className="text-blue-500" />
                  </svg>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold">{contact.progress}%</span>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 px-6 py-2 rounded-2xl">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Lead Score: <span className="text-emerald-400">{contact.score}</span></p>
                <div className="text-emerald-400 text-sm font-bold">(High)</div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 bg-blue-600/10 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm font-medium hover:text-white">
                  <Mail size={16} /> Email
                </button>
                <button className="p-2 bg-emerald-600/10 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2 text-sm font-medium hover:text-white">
                  <Phone size={16} /> Call
                </button>
                <button className="p-2 bg-slate-800 text-slate-400 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-medium hover:text-white">
                  <Edit size={16} /> Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Required for the neon spinning border effect
const Zap = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default Contacts;
