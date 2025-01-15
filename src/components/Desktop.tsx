import React, { useState } from 'react';
import { Window } from './Window';
import { Folder, Monitor, Play, Trash2, Chrome } from 'lucide-react';

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
    { title: 'MyPal', icon: Chrome },
    { title: 'CPU-Z', icon: Monitor },
    { title: 'ROMs', icon: Folder },
    { title: 'Emulators', icon: Folder },
    { title: 'Media Player', icon: Play },
    { title: 'Recycle Bin', icon: Trash2 },
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
            <icon.icon className="w-10 h-10 text-white drop-shadow-lg" />
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