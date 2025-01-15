import React from 'react';
import { Sheet } from './ui/sheet';
import { StartButton } from './taskbar/StartButton';
import { SystemTray } from './taskbar/SystemTray';
import { StartMenu } from './taskbar/StartMenu';

interface TaskBarProps {
  onCloseAllWindows?: () => void;
}

export const TaskBar = ({ onCloseAllWindows }: TaskBarProps) => {
  return (
    <Sheet>
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-700 to-blue-600 border-t border-blue-400 flex items-center justify-between px-1 z-50">
        <div className="flex items-center h-full gap-2">
          <StartButton />
          <div className="h-[2px] bg-blue-400/30 mx-1" />
          <div className="flex items-center gap-1">
            {/* Window buttons will be added here in the next iteration */}
          </div>
        </div>
        <SystemTray onCloseAllWindows={onCloseAllWindows} />
      </div>
      <StartMenu />
    </Sheet>
  );
};