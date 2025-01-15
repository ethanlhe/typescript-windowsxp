import React from 'react';
import { Desktop } from '../components/Desktop';
import { TaskBar } from '../components/TaskBar';

const Index = () => {
  return (
    <div className="h-screen overflow-hidden relative font-segoe">
      <Desktop />
      <TaskBar />
    </div>
  );
};

export default Index;