"use client"

import { motion, type MotionValue } from "framer-motion"

interface ShapesIllustrationProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function ShapesIllustration({ mouseX, mouseY }: ShapesIllustrationProps) {
  return (
    <div className="relative w-[300px] h-[200px]">
      {/* Purple Rectangle */}
      <motion.div
        className="absolute left-[60px] top-0 w-[60px] h-[100px] bg-[#6C63FF] rounded-md"
        style={{
          x: mouseX,
          y: mouseY,
          rotate: mouseX,
        }}
        transition={{ type: "spring", bounce: 0 }}
      >
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>

      {/* Black Rectangle */}
      <motion.div
        className="absolute left-[130px] top-[20px] w-[50px] h-[80px] bg-black rounded-md"
        style={{
          x: mouseX,
          y: mouseY,
          rotate: mouseX,
        }}
        transition={{ type: "spring", bounce: 0, delay: 0.1 }}
      >
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>

      {/* Yellow Rectangle */}
      <motion.div
        className="absolute right-[40px] top-[40px] w-[60px] h-[80px] bg-[#FFD700] rounded-md"
        style={{
          x: mouseX,
          y: mouseY,
          rotate: mouseX,
        }}
        transition={{ type: "spring", bounce: 0, delay: 0.2 }}
      >
        <div className="flex justify-center mt-10">
          <div className="w-8 h-[2px] bg-black rounded-full" />
        </div>
      </motion.div>

      {/* Orange Semi-circle */}
      <motion.div
        className="absolute left-[40px] bottom-0 w-[80px] h-[40px] bg-[#FF7043] rounded-t-full overflow-hidden"
        style={{
          x: mouseX,
          y: mouseY,
          rotate: mouseX,
        }}
        transition={{ type: "spring", bounce: 0, delay: 0.15 }}
      >
        <div className="flex justify-center mt-2">
          <div className="w-8 h-4 bg-white rounded-full relative">
            <div className="absolute w-6 h-2 bg-[#FF7043] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

