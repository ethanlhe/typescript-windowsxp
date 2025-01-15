import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { formatInTimeZone } from 'date-fns-tz';
import { 
  Chrome, 
  Image, 
  Settings, 
  Map, 
  Users, 
  Calculator, 
  Search,
  HelpCircle,
  Terminal,
  Monitor
} from 'lucide-react';

export const TaskBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = formatInTimeZone(currentTime, 'America/Los_Angeles', 'h:mm a');

  const leftMenuItems = [
    { icon: <Chrome className="w-5 h-5" />, label: 'Google Chrome' },
    { icon: <Image className="w-5 h-5" />, label: 'Photos' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
    { icon: <Map className="w-5 h-5" />, label: 'Maps' },
    { icon: <Image className="w-5 h-5" />, label: 'Paint' },
    { icon: <Monitor className="w-5 h-5" />, label: 'Desktop Sidebar' },
    { icon: <Users className="w-5 h-5" />, label: 'People' },
    { icon: <Terminal className="w-5 h-5" />, label: 'Sticky Notes' },
    { icon: <Terminal className="w-5 h-5" />, label: 'Snipping Tool' },
    { icon: <Calculator className="w-5 h-5" />, label: 'Calculator' },
    { icon: <Terminal className="w-5 h-5" />, label: 'Xbox Game Bar' },
  ];

  const rightMenuItems = [
    { icon: <Terminal className="w-5 h-5" />, label: 'My Documents' },
    { icon: <Image className="w-5 h-5" />, label: 'My Pictures' },
    { icon: <Terminal className="w-5 h-5" />, label: 'My Music' },
    { icon: <Monitor className="w-5 h-5" />, label: 'My Computer' },
    { icon: <Settings className="w-5 h-5" />, label: 'Control Panel' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
    { icon: <Terminal className="w-5 h-5" />, label: 'Networks' },
    { icon: <Search className="w-5 h-5" />, label: 'Search' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help and Support' },
    { icon: <Terminal className="w-5 h-5" />, label: 'Run...' },
  ];

  return (
    <>
      <Sheet>
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-700 to-blue-600 border-t border-blue-400 flex items-center justify-between px-1 z-50">
          <div className="flex items-center h-full">
            <SheetTrigger asChild>
              <button className="h-full px-4 flex items-center space-x-2 bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-sm mx-1">
                <img 
                  src="/lovable-uploads/1e1aaff4-1c6b-4e96-abd5-1b10acf84ef4.png" 
                  alt="Start" 
                  className="w-6 h-6" 
                />
                <span>start</span>
              </button>
            </SheetTrigger>
            <div className="h-full border-l border-r border-blue-500 mx-2 px-2 flex items-center">
              <button className="w-8 h-8 rounded hover:bg-blue-400/20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/1e1aaff4-1c6b-4e96-abd5-1b10acf84ef4.png" 
                  alt="Quick Launch" 
                  className="w-5 h-5" 
                />
              </button>
            </div>
          </div>
          
          <div className="flex items-center h-full bg-gradient-to-b from-blue-600 to-blue-700 px-2 space-x-4">
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
                {formattedTime}
              </span>
            </div>
          </div>
        </div>
        <SheetContent side="bottom" className="h-[70vh] bg-gradient-to-r from-blue-800 to-blue-700 p-0">
          <div className="grid grid-cols-[250px,1fr] h-full">
            <div className="bg-gradient-to-b from-blue-700 to-blue-600 p-4 border-r border-blue-500">
              <div className="flex items-center space-x-3 mb-6 bg-blue-800/50 p-2 rounded">
                <img 
                  src="/lovable-uploads/1e1aaff4-1c6b-4e96-abd5-1b10acf84ef4.png" 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <span className="text-white font-semibold">Administrator</span>
              </div>
              <div className="space-y-1">
                {leftMenuItems.map((item, index) => (
                  <button 
                    key={index}
                    className="w-full text-left text-white hover:bg-blue-500/50 px-2 py-2 rounded flex items-center space-x-3"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
                <div className="mt-4 pt-4 border-t border-blue-500">
                  <button className="w-full text-left text-white hover:bg-blue-500/50 px-2 py-2 rounded flex items-center space-x-3">
                    <Terminal className="w-5 h-5" />
                    <span>All Programs</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/90 to-blue-700/90 p-4">
              <div className="space-y-1">
                {rightMenuItems.map((item, index) => (
                  <button 
                    key={index}
                    className="w-full text-left text-white hover:bg-blue-500/50 px-2 py-2 rounded flex items-center space-x-3"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-900/50 flex justify-between">
                <button className="text-white hover:bg-blue-500/50 px-4 py-2 rounded flex items-center space-x-2">
                  <Terminal className="w-5 h-5" />
                  <span>Log Off</span>
                </button>
                <button className="text-white hover:bg-blue-500/50 px-4 py-2 rounded flex items-center space-x-2">
                  <Terminal className="w-5 h-5" />
                  <span>Turn Off Computer</span>
                </button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};