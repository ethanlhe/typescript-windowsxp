import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CloseAllDialogProps {
  onCloseAllWindows?: () => void;
}

export const CloseAllDialog = ({ onCloseAllWindows }: CloseAllDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <img 
          src="/lovable-uploads/44648c88-ab69-48f2-a16d-1030d28af09e.png" 
          alt="Close" 
          className="w-4 h-4 opacity-80 cursor-pointer hover:opacity-100"
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-[#ECE9D8] border-[#0054E3]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#0054E3]">Close All Windows</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to close all open windows? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#ECE9D8] hover:bg-[#DCE9D8] border-[#0054E3]">Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onCloseAllWindows}
            className="bg-[#0054E3] hover:bg-[#2E8AEF] text-white"
          >
            Close All
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};