import React, { useState, useEffect } from 'react';
import { Shield, Volume2 } from 'lucide-react';

export const TaskBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-700 to-blue-600 border-t border-blue-400 flex items-center justify-between px-1 z-50">
      <div className="flex items-center h-full">
        <button className="h-full px-4 flex items-center space-x-2 bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-sm mx-1">
          <img src="/windows-logo.png" alt="Start" className="w-6 h-6" />
          <span>start</span>
        </button>
        <div className="h-full border-l border-r border-blue-500 mx-2 px-2 flex items-center">
          {/* Quick launch icons */}
          <button className="w-8 h-8 rounded hover:bg-blue-400/20 flex items-center justify-center">
            <img src="/windows-logo.png" alt="Quick Launch" className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center h-full bg-gradient-to-b from-blue-600 to-blue-700 px-2 space-x-4">
        {/* System Tray Icons */}
        <img 
          src="/lovable-uploads/639a235f-bffe-4d55-838e-1944298536c6.png" 
          alt="Volume" 
          className="w-4 h-4 opacity-80"
        />
        <img 
          src="/lovable-uploads/9933f426-7fbd-40c0-af52-90ecc7059880.png" 
          alt="Users" 
          className="w-4 h-4 opacity-80"
        />
        <img 
          src="/lovable-uploads/81a0b106-411f-496c-825d-e7b2780de055.png" 
          alt="Info" 
          className="w-4 h-4 opacity-80"
        />
        <img 
          src="/lovable-uploads/44648c88-ab69-48f2-a16d-1030d28af09e.png" 
          alt="Close" 
          className="w-4 h-4 opacity-80"
        />
        <div className="flex items-center space-x-2 text-white border-l border-blue-500 pl-4">
          <span className="text-sm">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};