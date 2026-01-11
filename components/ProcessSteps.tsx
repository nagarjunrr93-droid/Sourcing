
import React from 'react';

interface Props {
  steps: string[];
}

export const ProcessSteps: React.FC<Props> = ({ steps }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
      <div className="space-y-8 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start group">
            <div className="z-10 w-8 h-8 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0 transition-all group-hover:bg-blue-500 group-hover:text-white">
              {idx + 1}
            </div>
            <div className="ml-6">
              <p className="text-slate-700 font-medium pt-1">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
