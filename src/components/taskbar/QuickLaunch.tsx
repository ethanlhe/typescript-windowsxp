import React from 'react';

export const QuickLaunch = () => {
  return (
    <div className="h-full border-l border-r border-blue-500 mx-2 px-2 flex items-center">
      <button className="w-8 h-8 rounded hover:bg-blue-400/20 flex items-center justify-center">
        <img 
          src="/lovable-uploads/1e1aaff4-1c6b-4e96-abd5-1b10acf84ef4.png" 
          alt="Quick Launch" 
          className="w-5 h-5" 
        />
      </button>
    </div>
  );
};