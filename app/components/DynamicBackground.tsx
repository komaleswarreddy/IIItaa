"use client"

import { motion, type MotionValue } from "framer-motion"

interface DynamicBackgroundProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}

export default function DynamicBackground({ mouseX, mouseY }: DynamicBackgroundProps) {
  const shapes = [
    { color: "#FF6B6B", size: 120, x: -20, y: -20 },
    { color: "#4ECDC4", size: 80, x: 30, y: 40 },
    { color: "#45B7D1", size: 100, x: -40, y: 20 },
    { color: "#FFA07A", size: 90, x: 40, y: -30 },
    { color: "#98D8C8", size: 70, x: 0, y: 0 },
  ]

  return (
    <>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-70 blur-xl"
          style={{
            backgroundColor: shape.color,
            width: shape.size,
            height: shape.size,
            x: mouseX,
            y: mouseY,
            left: `calc(${50 + shape.x}% - ${shape.size / 2}px)`,
            top: `calc(${50 + shape.y}% - ${shape.size / 2}px)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-pink-500/30 to-orange-400/30 mix-blend-overlay" />
    </>
  )
}

