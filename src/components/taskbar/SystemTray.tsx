import React from 'react';
import { formatInTimeZone } from 'date-fns-tz';

export const SystemTray = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = formatInTimeZone(currentTime, 'America/Los_Angeles', 'h:mm a');

  return (
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
        <span className="text-sm">{formattedTime}</span>
      </div>
    </div>
  );
};