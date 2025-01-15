import React from 'react';
import { SheetContent } from '../ui/sheet';
import { 
  Github,
  Image,
  Bot,
  Home,
  Terminal,
  HelpCircle,
} from 'lucide-react';
import { MenuItem } from './start-menu/types';
import { UserHeader } from './start-menu/UserHeader';
import { MenuSection } from './start-menu/MenuSection';
import { BottomActions } from './start-menu/BottomActions';

const leftMenuItems: MenuItem[] = [
  { icon: <Github className="w-6 h-6" />, label: 'Github' },
  { 
    icon: <img 
      src="/lovable-uploads/9bec12b8-bbac-475c-aa34-ac6ad3518620.png" 
      alt="LinkedIn" 
      className="w-6 h-6" 
    />, 
    label: 'LinkedIn' 
  },
  { icon: <Image className="w-6 h-6" />, label: 'Unsplash' },
  { icon: <Bot className="w-6 h-6" />, label: 'HuggingFace' },
  { icon: <Home className="w-6 h-6" />, label: 'Personal Website' },
];

const rightMenuItems: MenuItem[] = [
  { 
    icon: <img 
      src="/lovable-uploads/b934080e-edf5-4ccf-a1fc-47b2931c4852.png" 
      alt="My Documents" 
      className="w-6 h-6" 
    />, 
    label: 'My Documents' 
  },
  { icon: <Image className="w-6 h-6" />, label: 'My Pictures' },
  { 
    icon: <img 
      src="/lovable-uploads/22ca3516-6ce9-4d06-9c2e-f8724afb08da.png" 
      alt="My Music" 
      className="w-6 h-6" 
    />, 
    label: 'My Music' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/126b68a4-507f-465c-bd2a-f9659a16e2b0.png" 
      alt="Settings" 
      className="w-6 h-6" 
    />, 
    label: 'Settings' 
  },
  { icon: <HelpCircle className="w-6 h-6" />, label: 'Help and Support' },
  { icon: <Terminal className="w-6 h-6" />, label: 'Run...' },
];

export const StartMenu = () => {
  return (
    <SheetContent side="bottom" className="h-[70vh] p-0 w-[400px] left-0 rounded-t-lg" hideClose>
      <div className="h-full bg-[#3a6ea5] rounded-t-lg">
        <UserHeader />
        
        <div className="grid grid-cols-2 h-[calc(100%-64px)]">
          <div className="bg-white p-2">
            <MenuSection items={leftMenuItems} />
            <div className="mt-4 pt-4 border-t border-gray-300">
              <button className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200">
                <Terminal className="w-6 h-6" />
                <span>All Programs</span>
              </button>
            </div>
          </div>
          
          <div className="bg-[#D3E4FD] p-2">
            <MenuSection items={rightMenuItems} />
          </div>
        </div>
        
        <BottomActions />
      </div>
    </SheetContent>
  );
};