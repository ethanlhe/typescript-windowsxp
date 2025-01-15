import React, { useState } from 'react';
import { Window } from './Window';

export const Desktop = () => {
  const [windows, setWindows] = useState<Array<{ id: number; title: string }>>([]);
  const [nextId, setNextId] = useState(1);

  const openWindow = (title: string) => {
    setWindows([...windows, { id: nextId, title }]);
    setNextId(nextId + 1);
  };

  const closeWindow = (id: number) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const desktopIcons = [
    { 
      title: 'My Documents',
      iconUrl: '/lovable-uploads/f8736e34-c644-4ce0-ad98-f0b518a54160.png'
    },
    { 
      title: 'My Computer',
      iconUrl: '/lovable-uploads/4a65b2e7-6145-4a17-9f3b-b14631721955.png'
    },
    { 
      title: 'Network Places',
      iconUrl: '/lovable-uploads/96dfca7f-0bc6-4074-a266-e53f629d5a6c.png'
    },
    { 
      title: 'Notepad',
      iconUrl: '/lovable-uploads/4acedd65-1a68-4afe-a9e3-d0618ac9e82a.png'
    },
    { 
      title: 'My Briefcase',
      iconUrl: '/lovable-uploads/1b0d2c84-c6fa-4555-9c61-7ab8f7ef3e2e.png'
    },
    { 
      title: 'My Pictures',
      iconUrl: '/lovable-uploads/9c61f943-1ac0-45ee-9419-4861af0f6b6a.png'
    },
    { 
      title: 'My Videos',
      iconUrl: '/lovable-uploads/6e35bda1-6465-4300-8789-438e81d958ad.png'
    }
  ];

  return (
    <div className="min-h-screen bg-[url('/lovable-uploads/30ef0371-3b9b-4877-a444-75af5ffce3ad.png')] bg-cover bg-center p-4">
      <div className="grid grid-cols-auto-fit gap-6 p-4">
        {desktopIcons.map((icon, index) => (
          <button
            key={index}
            onClick={() => openWindow(icon.title)}
            className="desktop-icon flex flex-col items-center space-y-2 p-2 rounded hover:bg-white/10 transition-colors group w-20"
          >
            <img 
              src={icon.iconUrl} 
              alt={icon.title}
              className="w-12 h-12 drop-shadow-lg"
            />
            <span className="text-white text-sm font-segoe text-center drop-shadow-lg px-1 bg-black/20 rounded">
              {icon.title}
            </span>
          </button>
        ))}
      </div>

      {windows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">{window.title}</h2>
            <p className="text-gray-600">Content for {window.title}</p>
          </div>
        </Window>
      ))}
    </div>
  );
};