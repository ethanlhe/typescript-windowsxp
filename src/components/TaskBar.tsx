import React from 'react';
import { Clock } from 'lucide-react';

export const TaskBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-vista-taskbar bg-opacity-95 backdrop-blur-sm border-t border-vista-border flex items-center justify-between px-2 z-50">
      <div className="flex items-center">
        <button className="w-10 h-10 rounded-full bg-vista-pearl hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center mr-2">
          <img src="/windows-logo.png" alt="Start" className="w-6 h-6" />
        </button>
        <div className="flex space-x-1">
          {/* Running applications would go here */}
        </div>
      </div>
      <div className="flex items-center space-x-4 text-vista-text-light">
        <div className="flex items-center space-x-2 px-3 py-1 rounded hover:bg-white/10 transition-colors">
          <Clock className="w-4 h-4" />
          <span className="text-sm">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};