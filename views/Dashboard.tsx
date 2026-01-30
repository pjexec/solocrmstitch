
import React, { useState, useEffect } from 'react';
import { Trophy, Mail, Briefcase, CheckCircle2, Zap } from 'lucide-react';
import { MOCK_TASKS, MOCK_ACTIVITIES } from '../constants';
import { getCRMInsights } from '../services/geminiService';

const Dashboard: React.FC = () => {
  const [insights, setInsights] = useState<string>("Loading AI Insights...");

  useEffect(() => {
    const fetchInsights = async () => {
      const result = await getCRMInsights({ tasks: MOCK_TASKS, activities: MOCK_ACTIVITIES });
      setInsights(result);
    };
    fetchInsights();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#161f32] p-6 rounded-3xl border border-blue-500/30 neon-glow-blue relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Total Contacts</p>
              <h3 className="text-3xl font-bold">1,250</h3>
              <p className="text-xs text-slate-500 mt-1">1,500 Goal</p>
            </div>
            <div className="relative">
               <svg className="w-16 h-16 transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-800" />
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={175} strokeDashoffset={175 - (175 * 0.83)} className="text-blue-500" />
              </svg>
              <Trophy className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-400" size={20} />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
        </div>

        <div className="bg-[#161f32] p-6 rounded-3xl border border-slate-800 relative overflow-hidden group">
          <p className="text-slate-400 text-sm font-medium mb-1">Active Deals</p>
          <div className="flex items-end gap-2 mb-4">
            <h3 className="text-3xl font-bold">45</h3>
            <span className="text-xs text-slate-500 mb-2">45 / 50 Goal</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[90%] neon-glow-green"></div>
          </div>
        </div>

        <div className="bg-[#161f32] p-6 rounded-3xl border border-slate-800 relative overflow-hidden group">
          <p className="text-slate-400 text-sm font-medium mb-1">Pending Tasks</p>
          <div className="flex items-end gap-2 mb-4">
            <h3 className="text-3xl font-bold">8</h3>
            <span className="text-xs text-slate-500 mb-2">8 / 10 Goal</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-orange-500 h-full w-[80%] neon-glow-orange"></div>
          </div>
        </div>

        <div className="bg-[#161f32] p-6 rounded-3xl border border-slate-800 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Income (Closed)</p>
              <h3 className="text-3xl font-bold">$45,200</h3>
              <p className="text-xs text-slate-500 mt-1">$50k Goal</p>
            </div>
            <div className="relative">
               <svg className="w-16 h-16 transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-800" />
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={175} strokeDashoffset={175 - (175 * 0.9)} className="text-blue-400" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Bar */}
      <div className="bg-blue-900/10 border border-blue-500/20 p-4 rounded-2xl flex items-start gap-3">
        <Zap className="text-blue-400 shrink-0 mt-1" size={18} />
        <div>
          <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-1">AI Smart Insights</h4>
          <p className="text-sm text-slate-300 whitespace-pre-line leading-relaxed">{insights}</p>
        </div>
      </div>

      {/* Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Tasks */}
        <div className="bg-[#161f32] rounded-3xl p-8 border border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Upcoming Tasks</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Daily Progress</span>
              <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[65%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {MOCK_TASKS.map(task => (
              <div key={task.id} className="flex items-center justify-between group cursor-pointer hover:bg-slate-800/30 p-2 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`text-xs px-2 py-1 rounded-full border ${
                    task.priority === 'High' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' :
                    task.priority === 'Medium' ? 'text-blue-400 border-blue-500/30 bg-blue-500/5' :
                    'text-orange-400 border-orange-500/30 bg-orange-500/5'
                  }`}>
                    {task.title} ({task.priority})
                  </div>
                </div>
                <div className="relative">
                  <svg className="w-8 h-8 transform -rotate-90">
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-slate-800" />
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="transparent" strokeDasharray={88} strokeDashoffset={88 - (88 * task.progress / 100)} className={
                      task.priority === 'High' ? 'text-emerald-500' : task.priority === 'Medium' ? 'text-blue-500' : 'text-orange-500'
                    } />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#161f32] rounded-3xl p-8 border border-slate-800">
          <h2 className="text-xl font-bold mb-8">Recent Activity</h2>
          <div className="space-y-6">
            {MOCK_ACTIVITIES.map(activity => (
              <div key={activity.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'email' ? 'bg-emerald-500/10 text-emerald-500' :
                    activity.type === 'deal' ? 'bg-blue-500/10 text-blue-500' :
                    'bg-emerald-500/10 text-emerald-500'
                  }`}>
                    {activity.type === 'email' ? <CheckCircle2 size={18} /> : 
                     activity.type === 'deal' ? <Briefcase size={18} /> : 
                     <CheckCircle2 size={18} />}
                  </div>
                  <span className="text-slate-300 text-sm">{activity.content}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold whitespace-nowrap">
                   <div className={`p-1 rounded bg-slate-800 ${activity.type === 'deal' ? 'text-blue-400' : 'text-emerald-400'}`}>
                    <Trophy size={14} className="inline mr-1" />
                    {activity.points} points
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
