import React from 'react';
import { SheetContent } from '../ui/sheet';
import { 
  Github,
  Image,
  Bot,
  Home,
  Terminal,
  Settings,
  Search,
  HelpCircle,
} from 'lucide-react';

const leftMenuItems = [
  { icon: <Github className="w-5 h-5" />, label: 'Github' },
  { icon: <Image className="w-5 h-5" />, label: 'Unsplash' },
  { icon: <Bot className="w-5 h-5" />, label: 'HuggingFace' },
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
    <SheetContent side="bottom" className="h-[70vh] p-0 w-[400px] left-0 rounded-t-lg" hideClose>
      <div className="h-full bg-[#3a6ea5] rounded-t-lg">
        <div className="bg-gradient-to-r from-[#2277d9] to-[#5aa1ff] p-2 w-full rounded-t-lg">
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
        
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-r from-[#2277d9] to-[#5aa1ff] border-t border-gray-300 flex justify-between">
          <button className="text-white hover:bg-[#2f71cd] px-3 py-1.5 rounded flex items-center space-x-2 transition-colors duration-200">
            <img 
              src="/lovable-uploads/53ef17ac-7369-4efb-9275-38096a5f5ce1.png" 
              alt="Log Off" 
              className="w-5 h-5"
            />
            <span>Log Off</span>
          </button>
          <button className="text-white hover:bg-[#2f71cd] px-3 py-1.5 rounded flex items-center space-x-2 transition-colors duration-200">
            <img 
              src="/lovable-uploads/2b99f898-6363-42a6-8e4c-d72c1937d16a.png" 
              alt="Turn Off Computer" 
              className="w-5 h-5"
            />
            <span>Turn Off Computer</span>
          </button>
        </div>
      </div>
    </SheetContent>
  );
};