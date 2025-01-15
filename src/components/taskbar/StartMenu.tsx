import React from 'react';
import { SheetContent } from '../ui/sheet';
import { 
  Linkedin,
  Github,
  Image,
  Bot,
  MessageSquare,
  Home,
  Terminal,
  Settings,
  Search,
  HelpCircle,
} from 'lucide-react';

const leftMenuItems = [
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
  { icon: <Github className="w-5 h-5" />, label: 'Github' },
  { icon: <Image className="w-5 h-5" />, label: 'Unsplash' },
  { icon: <Bot className="w-5 h-5" />, label: 'HuggingFace' },
  { icon: <MessageSquare className="w-5 h-5" />, label: 'Bluesky' },
  { icon: <Home className="w-5 h-5" />, label: 'Personal Website' },
];

const rightMenuItems = [
  { icon: <Terminal className="w-5 h-5" />, label: 'My Documents' },
  { icon: <Image className="w-5 h-5" />, label: 'My Pictures' },
  { icon: <Terminal className="w-5 h-5" />, label: 'My Music' },
  { icon: <Settings className="w-5 h-5" />, label: 'Control Panel' },
  { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  { icon: <Search className="w-5 h-5" />, label: 'Search' },
  { icon: <HelpCircle className="w-5 h-5" />, label: 'Help and Support' },
  { icon: <Terminal className="w-5 h-5" />, label: 'Run...' },
];

export const StartMenu = () => {
  return (
    <SheetContent side="bottom" className="h-[70vh] bg-gradient-to-r from-blue-800 to-blue-700 p-0">
      <div className="grid grid-cols-[250px,1fr] h-full">
        <div className="bg-gradient-to-b from-blue-700 to-blue-600 p-4 border-r border-blue-500">
          <div className="flex items-center space-x-3 mb-6 bg-blue-800/50 p-2 rounded">
            <img 
              src="/lovable-uploads/b91930ab-1d49-415e-99b8-bd8661ca85a4.png" 
              alt="User" 
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <span className="text-white font-semibold">Taishi Walden</span>
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
  );
};