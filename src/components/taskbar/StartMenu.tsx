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
import { MenuItem } from './start-menu/types';
import { UserHeader } from './start-menu/UserHeader';
import { MenuSection } from './start-menu/MenuSection';
import { BottomActions } from './start-menu/BottomActions';

const leftMenuItems: MenuItem[] = [
  { icon: <Github className="w-6 h-6" />, label: 'Github' },
  { 
    icon: <img 
      src="/lovable-uploads/2c671e05-d27e-409d-8918-152d2cb5df88.png" 
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
  { icon: <Terminal className="w-6 h-6" />, label: 'My Documents' },
  { icon: <Image className="w-6 h-6" />, label: 'My Pictures' },
  { icon: <Terminal className="w-6 h-6" />, label: 'My Music' },
  { icon: <Settings className="w-6 h-6" />, label: 'Control Panel' },
  { icon: <Settings className="w-6 h-6" />, label: 'Settings' },
  { icon: <Search className="w-6 h-6" />, label: 'Search' },
  { icon: <HelpCircle className="w-6 h-6" />, label: 'Help and Support' },
  { icon: <Terminal className="w-6 h-6" />, label: 'Run...' },
];

export const StartMenu = () => {
  return (
    <SheetContent side="bottom" className="h-[70vh] p-0 w-[400px] left-0 rounded-t-lg" hideClose>
      <div className="h-full bg-[#3a6ea5] rounded-t-lg">
        <UserHeader />
        
        <div className="grid grid-cols-[60%,40%] h-[calc(100%-64px)]">
          <div className="bg-white p-2">
            <MenuSection items={leftMenuItems} />
            <div className="mt-4 pt-4 border-t border-gray-300">
              <button className="w-full text-left text-[#333] hover:bg-[#2f71cd] hover:text-white px-2 py-1.5 rounded flex items-center space-x-3 transition-colors duration-200">
                <Terminal className="w-6 h-6" />
                <span>All Programs</span>
              </button>
            </div>
          </div>
          
          <div className="bg-[#d1d8e6] p-2">
            <MenuSection items={rightMenuItems} />
          </div>
        </div>
        
        <BottomActions />
      </div>
    </SheetContent>
  );
};