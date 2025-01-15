import React, { useState, useRef } from 'react';
import { Minus, Square, X } from 'lucide-react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  initialPosition?: { x: number; y: number };
}

export const Window = ({ title, children, onClose, initialPosition = { x: 100, y: 100 } }: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const dragRef = useRef<{ isDragging: boolean; startX: number; startY: number }>({
    isDragging: false,
    startX: 0,
    startY: 0
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    dragRef.current = {
      isDragging: true,
      startX: e.clientX - position.x,
      startY: e.clientY - position.y
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current.isDragging) return;
    
    const newX = e.clientX - dragRef.current.startX;
    const newY = e.clientY - dragRef.current.startY;
    
    setPosition({
      x: Math.max(0, newX),
      y: Math.max(0, newY)
    });
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`fixed bg-[#ECE9D8] rounded shadow-vista-window animate-window-open border border-[#0054E3]
        ${isMaximized ? 'inset-0 m-0' : 'w-[600px]'}
      `}
      style={!isMaximized ? { 
        left: position.x, 
        top: position.y,
        zIndex: dragRef.current.isDragging ? 50 : 10 
      } : undefined}
    >
      <div
        className="h-8 bg-gradient-to-r from-[#0054E3] to-[#2E8AEF] rounded-t flex items-center justify-between px-2 cursor-move"
        onMouseDown={handleMouseDown}
      >
        <span className="text-white font-segoe text-sm flex items-center gap-2">
          {title}
        </span>
        <div className="flex items-center gap-[2px]">
          <button
            onClick={() => onClose()}
            className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#3C81E5] rounded-sm group"
          >
            <Minus className="w-3 h-3 text-white" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#3C81E5] rounded-sm group"
          >
            <Square className="w-3 h-3 text-white" />
          </button>
          <button
            onClick={onClose}
            className="w-[22px] h-[22px] flex items-center justify-center hover:bg-[#E81123] rounded-sm group"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4 bg-[#ECE9D8]">{children}</div>
    </div>
  );
};