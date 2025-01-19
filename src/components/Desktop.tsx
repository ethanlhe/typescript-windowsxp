import React, { useState } from 'react';
import { Window } from './Window';
import { TaskBar } from './TaskBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';

interface WindowState {
  id: number;
  title: string;
  position: { x: number; y: number };
}

export const Desktop = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextId, setNextId] = useState(1);

  const openWindow = (title: string) => {
    const offset = (windows.length * 30) % 150;
    setWindows([...windows, { 
      id: nextId, 
      title,
      position: { x: 100 + offset, y: 100 + offset }
    }]);
    setNextId(nextId + 1);
  };

  const closeWindow = (id: number) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const closeAllWindows = () => {
    setWindows([]);
  };

  const desktopIcons = [
    { 
      title: 'My Documents',
      iconUrl: '/lovable-uploads/f8736e34-c644-4ce0-ad98-f0b518a54160.png'
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

  const renderWindowContent = (title: string) => {
    if (title === 'Notepad') {
      return (
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="w-full bg-vista-window border-b border-vista-border">
            <TabsTrigger value="personal" className="data-[state=active]:bg-white">Personal Notes</TabsTrigger>
            <TabsTrigger value="work" className="data-[state=active]:bg-white">Work Notes</TabsTrigger>
            <TabsTrigger value="ideas" className="data-[state=active]:bg-white">Ideas</TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="mt-2">
            <Textarea 
              placeholder="Write your personal notes here..."
              className="min-h-[300px] bg-white resize-none font-tahoma"
            />
          </TabsContent>
          <TabsContent value="work" className="mt-2">
            <Textarea 
              placeholder="Write your work-related notes here..."
              className="min-h-[300px] bg-white resize-none font-tahoma"
            />
          </TabsContent>
          <TabsContent value="ideas" className="mt-2">
            <Textarea 
              placeholder="Write your ideas here..."
              className="min-h-[300px] bg-white resize-none font-tahoma"
            />
          </TabsContent>
        </Tabs>
      );
    }
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-gray-600">Content for {title}</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[url('/lovable-uploads/1ca93d81-8052-47a5-9ebd-bbedc21d0ad5.png')] bg-cover bg-center p-4">
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
            <span className="text-white text-sm font-segoe text-center drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
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
          initialPosition={window.position}
        >
          {renderWindowContent(window.title)}
        </Window>
      ))}
      
      <TaskBar onCloseAllWindows={closeAllWindows} />
    </div>
  );
};