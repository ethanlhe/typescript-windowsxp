import React from 'react';

export const BottomActions = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-r from-[#2277d9] to-[#5aa1ff] border-t border-gray-300 flex justify-between">
      <button className="text-white hover:bg-[#2f71cd] px-3 py-1.5 rounded flex items-center space-x-2 transition-colors duration-200">
        <img 
          src="/lovable-uploads/53ef17ac-7369-4efb-9275-38096a5f5ce1.png" 
          alt="Log Off" 
          className="w-5 h-5"
        />
        <span>Log Off</span>
      </button>
      <button className="text-white hover:bg-[#2f71cd] px-3 py-1.5 rounded flex items-center space-x-2 transition-colors duration-200">
        <img 
          src="/lovable-uploads/2b99f898-6363-42a6-8e4c-d72c1937d16a.png" 
          alt="Turn Off Computer" 
          className="w-5 h-5"
        />
        <span>Turn Off Computer</span>
      </button>
    </div>
  );
};