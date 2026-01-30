
import React from 'react';
import { Plus, Star } from 'lucide-react';
import { MOCK_TEMPLATES } from '../constants';

const Templates: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Templates Library</h1>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all neon-glow-blue shadow-lg">
          <Plus size={20} /> New Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_TEMPLATES.map(template => (
          <div 
            key={template.id} 
            className={`bg-[#161f32] p-8 rounded-3xl border group hover:scale-[1.02] transition-all cursor-pointer ${
              template.isTopPerforming ? 'border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.05)]' : 'border-slate-800'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">{template.name}</h3>
              {template.isTopPerforming && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  <Star size={12} fill="currentColor" /> Top Performing
                </div>
              )}
            </div>

            {/* Thumbnail Placeholder */}
            <div className="aspect-video bg-[#0b1120] rounded-2xl mb-8 relative overflow-hidden flex flex-col p-4 border border-slate-800">
               <div className="w-full h-1 bg-slate-800 rounded mb-2"></div>
               <div className="w-3/4 h-1 bg-slate-800 rounded mb-2"></div>
               <div className="w-1/2 h-1 bg-slate-800 rounded"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#161f32]/80 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Used {template.usageCount} times</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-500 uppercase">Conversion Rate</span>
                  <span className="text-slate-200">{template.conversionRate}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      template.conversionRate > 80 ? 'bg-emerald-400 neon-glow-green' : 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]'
                    }`} 
                    style={{ width: `${template.conversionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
