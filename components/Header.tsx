
import React from 'react';
import { Search, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between mb-8 gap-4">
      <div className="relative flex-grow max-w-2xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search contacts, deals, tasks..." 
          className="w-full bg-[#161f32] border border-slate-700 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-all text-slate-200 shadow-inner"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-75"></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-blue-600/90 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors shadow-lg shadow-blue-900/20">
          <Plus size={16} /> Contact
        </button>
        <button className="bg-blue-600/90 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors shadow-lg shadow-blue-900/20">
          <Plus size={16} /> Deal
        </button>
        <button className="bg-blue-600/90 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors shadow-lg shadow-blue-900/20">
          <Plus size={16} /> Task
        </button>
        <button className="bg-blue-600/90 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-colors shadow-lg shadow-blue-900/20">
          <Plus size={16} /> Template
        </button>
      </div>
    </header>
  );
};

export default Header;
