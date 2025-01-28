'use client';

import { useState } from 'react';
import SignupForm from '../components/SignupForm';
import InteractiveShapes from '../components/InteractiveShapes';
import { useMotionValue } from 'framer-motion';

export default function SignupPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

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
          isTyping={isTyping}
          isPassword={isPassword}
        />
      </div>
      <div className="z-10 w-full">
        <SignupForm 
          onTyping={setIsTyping} 
          onPassword={setIsPassword}
        />
      </div>
    </main>
  );
}
