
import React from 'react';
import { Trophy, CheckCircle } from 'lucide-react';
import { MOCK_DEALS } from '../constants';

const Deals: React.FC = () => {
  const stages = ['Lead', 'Qualified', 'Proposal', 'Won'] as const;

  const getDealsInStage = (stage: string) => MOCK_DEALS.filter(d => d.status === stage);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold">Deals Pipeline</h1>

      {/* Stage Headers */}
      <div className="grid grid-cols-4 gap-6">
        {stages.map((stage) => {
          const count = getDealsInStage(stage).length;
          const totalAmount = getDealsInStage(stage).reduce((acc, curr) => acc + curr.amount, 0);
          const goal = stage === 'Won' ? 50000 : stage === 'Proposal' ? 30000 : 25000;
          const progress = Math.min((totalAmount / goal) * 100, 100);

          return (
            <div key={stage} className={`bg-[#161f32] p-6 rounded-3xl border transition-all ${
              stage === 'Won' ? 'border-blue-500/50 neon-glow-blue' : 'border-slate-800'
            }`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">{stage}s</p>
                  <h3 className="text-2xl font-bold">${(totalAmount / 1000).toFixed(1)}k</h3>
                  <p className="text-xs text-slate-500 mt-1">${(goal / 1000).toFixed(0)}k Goal</p>
                </div>
                {stage === 'Won' ? (
                  <div className="relative">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-800" />
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={126} strokeDashoffset={126 - (126 * 0.9)} className="text-blue-500" />
                    </svg>
                    <Trophy className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-400" size={14} />
                  </div>
                ) : (
                   <div className="relative">
                    <svg className="w-12 h-12 transform -rotate-90">
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-800" />
                      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={126} strokeDashoffset={126 - (126 * progress / 100)} className={
                        stage === 'Qualified' ? 'text-emerald-500' : stage === 'Proposal' ? 'text-orange-500' : 'text-blue-500'
                      } />
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold">{Math.round(progress)}%</span>
                  </div>
                )}
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className={`h-full ${
                  stage === 'Won' ? 'bg-blue-500' : stage === 'Proposal' ? 'bg-orange-500' : stage === 'Qualified' ? 'bg-emerald-500' : 'bg-blue-400'
                }`} style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Kanban Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stages.map((stage) => (
          <div key={stage} className="space-y-4">
            {getDealsInStage(stage).length === 0 && (
              <div className="bg-slate-900/50 border border-dashed border-slate-800 rounded-3xl h-40 flex items-center justify-center text-slate-600">
                Empty
              </div>
            )}
            {getDealsInStage(stage).map(deal => (
              <div 
                key={deal.id} 
                className={`bg-[#161f32] p-5 rounded-3xl border transition-all hover:border-blue-500/50 group cursor-pointer ${
                  deal.status === 'Won' ? 'border-emerald-500/50' : 
                  deal.status === 'Proposal' ? 'border-orange-500/50' : 
                  deal.status === 'Qualified' ? 'border-emerald-500/50' : 
                  'border-slate-800'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-slate-100">{deal.name} - ${deal.amount / 1000}k</h4>
                  {deal.status === 'Won' && (
                    <div className="flex gap-1">
                      <CheckCircle size={14} className="text-emerald-400" />
                      <Trophy size={14} className="text-orange-400" />
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-slate-400 mb-4">Probability: {deal.probability}%</p>
                
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6">
                  <div className={`h-full transition-all duration-1000 ${
                    deal.status === 'Won' ? 'bg-emerald-500' : 
                    deal.status === 'Proposal' ? 'bg-orange-500' : 
                    'bg-blue-500'
                  }`} style={{ width: `${deal.probability}%` }}></div>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] text-slate-500">Contact: <span className="text-slate-300">{deal.contact}</span></p>
                  <p className="text-[10px] text-slate-500">Due: <span className="text-slate-300">{deal.due}</span></p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
