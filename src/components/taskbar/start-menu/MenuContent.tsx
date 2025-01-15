import React from 'react';
import { Terminal } from 'lucide-react';
import { MenuSection } from './MenuSection';
import { leftMenuItems, rightMenuItems } from './menuItems';

export const MenuContent = () => {
  return (
    <div className="grid grid-cols-2 h-[calc(100%-64px)]">
      <div className="bg-white p-2">
        <MenuSection items={leftMenuItems} />
        <div className="mt-4 pt-4 border-t border-gray-300">
          <button className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200">
            <Terminal className="w-6 h-6" />
            <span>All Programs</span>
          </button>
        </div>
      </div>
      
      <div className="bg-[#D3E4FD] p-2">
        <MenuSection items={rightMenuItems} />
      </div>
    </div>
  );
};