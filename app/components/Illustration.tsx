"use client"

import { motion, type MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

interface IllustrationProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function Illustration({ mouseX, mouseY }: IllustrationProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-[300px] h-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute w-24 h-32 bg-[#6C63FF] rounded-lg left-12 top-8 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        style={{
          x: mouseX.get() * 30,
          y: mouseY.get() * 30,
        }}
        animate={{
          x: mouseX.get() * 30,
          y: mouseY.get() * 30,
          rotate: isHovered ? [0, 5, -5, 0] : 0,
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-2 h-2 bg-white rounded-full mr-1" />
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </motion.div>

      <motion.div
        className="absolute w-20 h-20 bg-black rounded-lg right-12 top-16 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        style={{
          x: mouseX.get() * -25,
          y: mouseY.get() * 35,
        }}
        animate={{
          x: mouseX.get() * -25,
          y: mouseY.get() * 35,
          rotate: isHovered ? [-5, 5, -5, 0] : 0,
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-2 h-2 bg-white rounded-full mr-1" />
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </motion.div>

      <motion.div
        className="absolute w-28 h-28 bg-[#FF7043] rounded-full left-8 bottom-12 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        style={{
          x: mouseX.get() * 35,
          y: mouseY.get() * -30,
        }}
        animate={{
          x: mouseX.get() * 35,
          y: mouseY.get() * -30,
          rotate: isHovered ? [0, -5, 5, 0] : 0,
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-8 h-4 bg-white rounded-full relative">
            <div className="absolute w-6 h-2 bg-[#FF7043] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-24 h-24 bg-[#FFD700] right-8 bottom-8 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        style={{
          x: mouseX.get() * -30,
          y: mouseY.get() * -25,
        }}
        animate={{
          x: mouseX.get() * -30,
          y: mouseY.get() * -25,
          rotate: isHovered ? [5, -5, 5, 0] : 0,
        }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="w-8 h-[2px] bg-black rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

