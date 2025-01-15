import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { formatInTimeZone } from 'date-fns-tz';

export const TaskBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = formatInTimeZone(currentTime, 'America/Los_Angeles', 'h:mm a');

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
        <SheetContent side="bottom" className="h-[70vh] bg-white/95 backdrop-blur-sm p-0">
          <div className="grid grid-cols-2 h-full">
            <div className="bg-gradient-to-b from-blue-700 to-blue-600 p-4">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/1e1aaff4-1c6b-4e96-abd5-1b10acf84ef4.png" 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <span className="text-white font-semibold">Administrator</span>
              </div>
              <div className="space-y-2">
                {['My Documents', 'My Pictures', 'My Music', 'My Computer', 'Control Panel', 'Help and Support'].map((item) => (
                  <button 
                    key={item}
                    className="w-full text-left text-white hover:bg-blue-500/50 px-2 py-1 rounded"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="space-y-2">
                {['Internet Explorer', 'Outlook Express', 'Windows Media Player', 'Windows Messenger'].map((item) => (
                  <button 
                    key={item}
                    className="w-full text-left text-gray-700 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    {item}
                  </button>
                ))}
                <hr className="my-4" />
                {['All Programs', 'Run...', 'Log Off', 'Turn Off Computer'].map((item) => (
                  <button 
                    key={item}
                    className="w-full text-left text-gray-700 hover:bg-gray-100 px-2 py-1 rounded"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};