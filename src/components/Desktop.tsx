import React, { useState } from 'react';
import { Window } from './Window';
import { TaskBar } from './TaskBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Button } from './ui/button';
import { Label } from './ui/label';

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
        <Tabs defaultValue="music" className="w-full">
          <TabsList className="w-full bg-vista-window border-b border-vista-border rounded-none">
            <TabsTrigger 
              value="music" 
              className="data-[state=active]:bg-white rounded-none px-6"
            >
              Music
            </TabsTrigger>
            <TabsTrigger 
              value="dogs" 
              className="data-[state=active]:bg-white rounded-none px-6"
            >
              Dogs
            </TabsTrigger>
            <TabsTrigger 
              value="food" 
              className="data-[state=active]:bg-white rounded-none px-6"
            >
              Food
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="music" className="mt-4 px-6">
            <h2 className="text-lg mb-6">Set your listening preferences</h2>
            
            <div className="border rounded-lg p-6 bg-white">
              <div className="text-vista-accent font-semibold mb-4">Today's mood</div>
              
              <RadioGroup defaultValue="nicki" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nicki" id="nicki" />
                  <Label htmlFor="nicki">Nicki Minaj</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bell" id="bell" />
                  <Label htmlFor="bell">Bell Towers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monique" id="monique" />
                  <Label htmlFor="monique">The Glamorous Monique</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="env" id="env" />
                  <Label htmlFor="env">EN. V</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mt-4">
              <Button 
                variant="outline" 
                className="mr-2 border-vista-border text-vista-text"
              >
                Reset Alarm...
              </Button>
              <span className="text-sm text-gray-600">Try this to get some attention</span>
            </div>

            <div className="flex justify-end gap-2 mt-8">
              <Button 
                variant="outline" 
                className="border-vista-border text-vista-text px-6"
              >
                OK
              </Button>
              <Button 
                variant="outline" 
                className="border-vista-border text-vista-text px-6"
              >
                Cancel
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="dogs" className="mt-4 px-6">
            <div className="p-4">
              <h2 className="text-lg mb-4">Dog Settings</h2>
              <p className="text-gray-600">Configure your dog preferences here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="food" className="mt-4 px-6">
            <div className="p-4">
              <h2 className="text-lg mb-4">Food Settings</h2>
              <p className="text-gray-600">Configure your food preferences here.</p>
            </div>
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