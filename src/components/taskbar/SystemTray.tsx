import React from 'react';
import { Clock } from './system-tray/Clock';
import { CloseAllDialog } from './system-tray/CloseAllDialog';

interface SystemTrayProps {
  onCloseAllWindows?: () => void;
}

export const SystemTray = ({ onCloseAllWindows }: SystemTrayProps) => {
  return (
    <div className="flex items-center h-full bg-gradient-to-b from-blue-600 to-blue-700 px-2 space-x-4">
      <img 
        src="/lovable-uploads/9933f426-7fbd-40c0-af52-90ecc7059880.png" 
        alt="Users" 
        className="w-4 h-4 opacity-80"
      />
      <CloseAllDialog onCloseAllWindows={onCloseAllWindows} />
      <Clock />
    </div>
  );
};