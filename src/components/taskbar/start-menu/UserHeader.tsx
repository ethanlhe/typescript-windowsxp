import React from 'react';

export const UserHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#2277d9] to-[#5aa1ff] p-2 w-full rounded-t-lg">
      <div className="flex items-center space-x-3">
        <img 
          src="/lovable-uploads/2d1f9931-cb67-4305-818b-c6890340912d.png" 
          alt="User" 
          className="w-12 h-12 rounded-lg border-2 border-white"
        />
        <span className="text-white font-bold text-lg">Taishi</span>
      </div>
    </div>
  );
};