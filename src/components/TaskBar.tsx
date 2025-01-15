import React from 'react';
import { Sheet } from './ui/sheet';
import { StartButton } from './taskbar/StartButton';
import { QuickLaunch } from './taskbar/QuickLaunch';
import { SystemTray } from './taskbar/SystemTray';
import { StartMenu } from './taskbar/StartMenu';

export const TaskBar = () => {
  return (
    <Sheet>
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-700 to-blue-600 border-t border-blue-400 flex items-center justify-between px-1 z-50">
        <div className="flex items-center h-full">
          <StartButton />
          <QuickLaunch />
        </div>
        <SystemTray />
      </div>
      <StartMenu />
    </Sheet>
  );
};