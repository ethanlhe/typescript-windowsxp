import React, { useState } from 'react';
import { Window } from './Window';
import { Folder, FileText } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-[url('/vista-wallpaper.jpg')] bg-cover bg-center p-4">
      <div className="grid grid-cols-6 gap-4">
        <button
          onClick={() => openWindow('Documents')}
          className="flex flex-col items-center space-y-2 p-2 rounded hover:bg-white/10 transition-colors group"
        >
          <Folder className="w-12 h-12 text-vista-accent" />
          <span className="text-vista-text-light text-sm font-segoe group-hover:underline">
            Documents
          </span>
        </button>
        <button
          onClick={() => openWindow('Notes')}
          className="flex flex-col items-center space-y-2 p-2 rounded hover:bg-white/10 transition-colors group"
        >
          <FileText className="w-12 h-12 text-vista-accent" />
          <span className="text-vista-text-light text-sm font-segoe group-hover:underline">
            Notes
          </span>
        </button>
      </div>

      {windows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
        >
          <div className="min-h-[200px]">
            <h2 className="text-lg font-semibold mb-4">{window.title}</h2>
            <p className="text-gray-600">This is a sample window content.</p>
          </div>
        </Window>
      ))}
    </div>
  );
};