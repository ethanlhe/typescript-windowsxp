import React from 'react';
import { MenuSectionProps } from './types';

export const MenuSection = ({ items, className = "" }: MenuSectionProps) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {items.map((item, index) => (
        <button 
          key={index}
          className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            {React.cloneElement(item.icon as React.ReactElement, {
              className: 'w-8 h-8'
            })}
          </div>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
    </div>
  );
};