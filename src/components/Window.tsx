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
      className={`fixed bg-vista-window rounded-lg shadow-vista-window animate-window-open
        ${isMaximized ? 'inset-0 m-0' : 'w-[600px]'}
      `}
      style={!isMaximized ? { left: position.x, top: position.y } : undefined}
    >
      <div
        className="h-8 bg-vista-accent bg-opacity-90 backdrop-blur-sm rounded-t-lg flex items-center justify-between px-3 cursor-move"
        draggable={!isMaximized}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      >
        <span className="text-vista-text-light font-segoe text-sm">{title}</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onClose()}
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Minus className="w-3 h-3 text-vista-text-light" />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Square className="w-3 h-3 text-vista-text-light" />
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
          >
            <X className="w-3 h-3 text-vista-text-light" />
          </button>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};