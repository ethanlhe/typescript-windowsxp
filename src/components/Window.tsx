import React, { useState } from 'react';
import { Minus, Square, X } from 'lucide-react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Window = ({ title, children, onClose }: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleDragStart = (e: React.DragEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    e.dataTransfer.setData('text/plain', `${offsetX},${offsetY}`);
  };

  const handleDrag = (e: React.DragEvent) => {
    if (e.clientX === 0 && e.clientY === 0) return;
    const [offsetX, offsetY] = e.dataTransfer.getData('text/plain').split(',');
    setPosition({
      x: e.clientX - parseInt(offsetX),
      y: e.clientY - parseInt(offsetY),
    });
  };

  return (
    <div
      className={`fixed bg-[#ECE9D8] rounded shadow-vista-window animate-window-open border border-[#0054E3]
        ${isMaximized ? 'inset-0 m-0' : 'w-[600px]'}
      `}
      style={!isMaximized ? { left: position.x, top: position.y } : undefined}
    >
      <div
        className="h-8 bg-gradient-to-r from-[#0054E3] to-[#2E8AEF] rounded-t flex items-center justify-between px-2 cursor-move"
        draggable={!isMaximized}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
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