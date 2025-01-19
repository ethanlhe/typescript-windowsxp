import React from 'react';
import { SheetContent } from '../ui/sheet';
import { UserHeader } from './start-menu/UserHeader';
import { MenuContent } from './start-menu/MenuContent';
import { BottomActions } from './start-menu/BottomActions';

// Changed to default export for lazy loading
const StartMenu = () => {
  return (
    <SheetContent side="bottom" className="h-[70vh] p-0 w-[400px] left-0 rounded-t-lg" hideClose>
      <div className="h-full bg-[#3a6ea5] rounded-t-lg">
        <UserHeader />
        <MenuContent />
        <BottomActions />
      </div>
    </SheetContent>
  );
};

export { StartMenu };
export default StartMenu;