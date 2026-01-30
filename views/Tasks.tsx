
import React from 'react';
import { MOCK_TASKS } from '../constants';

const Tasks: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div className="bg-[#161f32] p-10 rounded-[3rem] border border-slate-800 space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Tasks & Quests Log</h2>
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-400">Daily Completion</span>
            <div className="relative w-96 h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 animate-pulse-slow w-[45%] neon-glow-blue"></div>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold z-10">45% Completed</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* Daily Quests */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold tracking-tight border-b border-slate-800 pb-4">Daily Quests</h3>
            <div className="space-y-8">
              {MOCK_TASKS.filter(t => t.id !== '3').map(task => (
                <div key={task.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1.5 rounded-2xl text-xs font-bold tracking-wide border ${
                      task.priority === 'High' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' : 'text-blue-400 border-blue-500/30 bg-blue-500/5'
                    }`}>
                      {task.title} ({task.priority})
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                     <span className="text-emerald-400 font-bold">+{task.xp} XP</span>
                     <div className="relative w-8 h-8">
                       <svg className="w-8 h-8 transform -rotate-90">
                        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-slate-800" />
                        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray={88} strokeDashoffset={88 - (88 * task.progress / 100)} className="text-blue-500" />
                      </svg>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold tracking-tight border-b border-slate-800 pb-4">Milestones</h3>
            <div className="space-y-8">
               <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1.5 rounded-2xl text-xs font-bold tracking-wide border text-orange-400 border-orange-500/30 bg-orange-500/5">
                    Weekly Team Sync (Low)
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-emerald-400 font-bold">+10 XP</span>
                  <div className="w-8 h-8 rounded-full border-2 border-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Recent Activity Mini-List */}
       <div className="bg-[#161f32] p-10 rounded-[3rem] border border-slate-800 space-y-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            <button className="text-slate-500 hover:text-slate-300 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6 group">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-slate-300">Sent email to Jane Doe</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                   <Trophy size={14} className="inline mr-1" />
                   <span className="text-xs font-bold">20 points</span>
                 </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-6 group">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <span className="text-slate-300">Created new deal: Project Y</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                   <Award size={14} className="inline mr-1" />
                   <span className="text-xs font-bold">2 points</span>
                 </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800 pb-6 group">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span className="text-slate-300">Task "Call Lead" marked complete</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                   <Trophy size={14} className="inline mr-1" />
                   <span className="text-xs font-bold">1 point</span>
                 </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  );
};

// Re-using local SVG icons for consistency
const Trophy = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34c3.12-.51 5.5-3.21 5.5-6.44V4H4.5v3.88c0 3.23 2.38 5.93 5.5 6.44z"/></svg>
);

const Award = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"/><path d="M15 7l5.1-5.1M19 11l5-5M4.9 1.9L10 7M0 6l5 5"/></svg>
);

export default Tasks;
