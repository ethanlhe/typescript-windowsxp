import React from 'react';

export const UserHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#2277d9] to-[#5aa1ff] p-2 w-full rounded-t-lg">
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/b91930ab-1d49-415e-99b8-bd8661ca85a4.png" 
          alt="User" 
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <span className="text-white font-bold text-lg">Taishi Walden</span>
      </div>
    </div>
  );
};