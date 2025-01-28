'use client';

import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import InteractiveShapes from '../components/InteractiveShapes';
import { useMotionValue } from 'framer-motion';

export default function LoginPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-0">
        <InteractiveShapes 
          mouseX={mouseX} 
          mouseY={mouseY} 
          isTyping={false}
          isPassword={false}
        />
      </div>
      <div className="z-10 w-full">
        <LoginForm />
      </div>
    </main>
  );
}
