
import React from 'react';
import { Mail, Briefcase, CheckCircle, Trophy, Award } from 'lucide-react';
import { MOCK_ACTIVITIES } from '../constants';

const ActivityFeed: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Activity & Achievements Feed</h1>

      <div className="flex gap-12">
        {/* Main Feed Column */}
        <div className="flex-grow space-y-12 relative">
          <div className="absolute left-[20px] top-6 bottom-0 w-[2px] bg-blue-500/30"></div>
          
          <div className="space-y-6">
             <div className="bg-[#161f32] p-6 rounded-3xl border border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-all cursor-default">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl relative z-10 border border-blue-500/20">
                  <Mail size={20} />
                </div>
                <span className="font-medium">Sent email to Jane Doe</span>
              </div>
              <span className="text-emerald-400 font-bold">+50 XP</span>
            </div>

            <div className="bg-[#161f32] p-6 rounded-3xl border border-slate-800 flex items-center justify-between group hover:border-blue-500/50 transition-all cursor-default">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl relative z-10 border border-blue-500/20">
                  <Briefcase size={20} />
                </div>
                <span className="font-medium">Created new deal: Project Y</span>
              </div>
              <span className="text-emerald-400 font-bold">+75 XP</span>
            </div>

            <div className="bg-[#161f32] p-6 rounded-3xl border border-slate-800 flex items-center justify-between group hover:border-emerald-500/50 transition-all cursor-default">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl relative z-10 border border-emerald-500/20">
                  <CheckCircle size={20} />
                </div>
                <span className="font-medium">Task "Call Lead" marked complete</span>
              </div>
              <span className="text-emerald-400 font-bold">+60 XP</span>
            </div>
          </div>

          <div className="bg-[#161f32] p-6 rounded-3xl border border-blue-500/50 neon-glow-blue flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl relative z-10 border border-emerald-500/20">
                <CheckCircle size={20} />
              </div>
              <span className="font-medium">Task "Follow up email" marked complete</span>
            </div>
            <span className="text-emerald-400 font-bold">+60 XP</span>
          </div>
        </div>

        {/* Achievement Branch Column */}
        <div className="w-96 space-y-24 pt-12">
          <div className="relative">
            {/* Branching Line */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-blue-500/30"></div>
            
            <div className="bg-[#161f32] p-8 rounded-3xl border border-blue-500/50 neon-glow-blue space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center text-orange-400">
                  <Trophy size={32} className="neon-glow-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">5-Day Streak!</h3>
                  <p className="text-sm text-slate-400">Kept the momentum going for 5 days straight!</p>
                </div>
              </div>
              <div className="text-emerald-400 font-bold">+200 XP</div>
            </div>
          </div>

          <div className="relative">
            {/* Branching Line */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-blue-500/30"></div>
            
            <div className="bg-[#161f32] p-8 rounded-3xl border border-blue-500/50 neon-glow-blue space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400">
                  <Award size={32} className="neon-glow-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Level Up: Novice Solopreneur</h3>
                  <p className="text-sm text-slate-400">You've unlocked advanced task automation!</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-emerald-400 font-bold">+500 XP</div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[45%] neon-glow-green"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
