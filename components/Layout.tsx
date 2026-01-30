
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  CheckSquare, 
  FileText, 
  Activity as ActivityIcon,
  Download,
  Upload
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 neon-glow-blue' 
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  setView: (view: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  return (
    <div className="flex min-h-screen bg-[#0b1120] text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 p-6 flex flex-col gap-8 sticky top-0 h-screen">
        <div className="text-2xl font-bold text-blue-500 flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white neon-glow-blue">C</div>
          CRM
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={currentView === 'dashboard'} 
            onClick={() => setView('dashboard')}
          />
          <SidebarItem 
            icon={<Users size={20} />} 
            label="Contacts" 
            active={currentView === 'contacts'}
            onClick={() => setView('contacts')}
          />
          <SidebarItem 
            icon={<Briefcase size={20} />} 
            label="Deals" 
            active={currentView === 'deals'}
            onClick={() => setView('deals')}
          />
          <SidebarItem 
            icon={<CheckSquare size={20} />} 
            label="Tasks" 
            active={currentView === 'tasks'}
            onClick={() => setView('tasks')}
          />
          <SidebarItem 
            icon={<FileText size={20} />} 
            label="Templates" 
            active={currentView === 'templates'}
            onClick={() => setView('templates')}
          />
          <SidebarItem 
            icon={<ActivityIcon size={20} />} 
            label="Activity" 
            active={currentView === 'activity'}
            onClick={() => setView('activity')}
          />
        </nav>

        <div className="flex flex-col gap-3 pt-6 border-t border-slate-800">
          <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 px-4 py-2 border border-slate-700 rounded-lg transition-colors">
            <Download size={16} /> Export Data
          </button>
          <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 px-4 py-2 border border-slate-700 rounded-lg transition-colors">
            <Upload size={16} /> Import Data
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
