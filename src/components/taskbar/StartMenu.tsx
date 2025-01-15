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
    <SheetContent side="bottom" className="h-[70vh] p-0 w-[400px] left-0">
      <div className="h-full bg-[#3a6ea5]">
        <div className="bg-gradient-to-r from-[#0a246a] to-[#3a6ea5] p-2 w-full">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b91930ab-1d49-415e-99b8-bd8661ca85a4.png" 
              alt="User" 
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <span className="text-white font-bold text-lg">Taishi Walden</span>
          </div>
        </div>
        
        <div className="grid grid-cols-[60%,40%] h-[calc(100%-64px)]">
          <div className="bg-white p-2">
            <div className="space-y-1">
              {leftMenuItems.map((item, index) => (
                <button 
                  key={index}
                  className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-300">
                <button className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200">
                  <Terminal className="w-5 h-5" />
                  <span>All Programs</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-[#d1d8e6] p-2">
            <div className="space-y-1">
              {rightMenuItems.map((item, index) => (
                <button 
                  key={index}
                  className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-[#d1d8e6] border-t border-gray-300 flex justify-between">
          <button className="text-[#333] hover:bg-[#2f71cd] hover:text-white px-3 py-1.5 rounded flex items-center space-x-2 transition-colors duration-200">
            <Terminal className="w-5 h-5" />
            <span>Log Off</span>
          </button>
          <button className="text-[#333] hover:bg-[#2f71cd] hover:text-white px-3 py-1.5 rounded flex items-center space-x-2 transition-colors duration-200">
            <Terminal className="w-5 h-5" />
            <span>Turn Off Computer</span>
          </button>
        </div>
      </div>
    </SheetContent>
  );
};