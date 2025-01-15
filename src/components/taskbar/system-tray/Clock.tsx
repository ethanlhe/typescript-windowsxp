import React from 'react';
import { formatInTimeZone } from 'date-fns-tz';

export const Clock = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = formatInTimeZone(currentTime, 'America/Los_Angeles', 'h:mm a');

  return (
    <div className="flex items-center space-x-2 text-white border-l border-blue-500 pl-4">
      <span className="text-sm">{formattedTime}</span>
    </div>
  );
};