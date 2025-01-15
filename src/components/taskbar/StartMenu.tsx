import React from 'react';
import { SheetContent } from '../ui/sheet';
import { 
  Image,
  Terminal,
} from 'lucide-react';
import { MenuItem } from './start-menu/types';
import { UserHeader } from './start-menu/UserHeader';
import { MenuSection } from './start-menu/MenuSection';
import { BottomActions } from './start-menu/BottomActions';

const leftMenuItems: MenuItem[] = [
  { 
    icon: <img 
      src="/lovable-uploads/901ccaa9-1397-469c-9194-61f73e330cf6.png" 
      alt="Github" 
      className="w-6 h-6" 
    />, 
    label: 'Github' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/9bec12b8-bbac-475c-aa34-ac6ad3518620.png" 
      alt="LinkedIn" 
      className="w-6 h-6" 
    />, 
    label: 'LinkedIn' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/fbfc1c8a-3fca-4858-a236-fd4ab5d313c7.png" 
      alt="Unsplash" 
      className="w-6 h-6" 
    />, 
    label: 'Unsplash' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/a3afcc23-7e14-48d1-a9b3-37d6a529a850.png" 
      alt="HuggingFace" 
      className="w-6 h-6" 
    />, 
    label: 'HuggingFace' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/9790699b-2351-4e15-a1d6-7ec499b94d02.png" 
      alt="Personal Website" 
      className="w-6 h-6" 
    />, 
    label: 'Personal Website' 
  },
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
  { 
    icon: <img 
      src="/lovable-uploads/6b52b025-c8fc-4e4b-9e67-16a321f98428.png" 
      alt="My Pictures" 
      className="w-6 h-6" 
    />, 
    label: 'My Pictures' 
  },
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
  { 
    icon: <img 
      src="/lovable-uploads/3e54d53e-af2e-42d6-b066-4e18735b907d.png" 
      alt="Help and Support" 
      className="w-6 h-6" 
    />, 
    label: 'Help and Support' 
  },
  { 
    icon: <img 
      src="/lovable-uploads/94a6af0b-2891-48c7-b77b-586289ce9a7e.png" 
      alt="Run" 
      className="w-6 h-6" 
    />, 
    label: 'Run...' 
  },
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