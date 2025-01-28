"use client"

import { motion } from "framer-motion"

interface CursorEffectProps {
  mousePosition: { x: number; y: number }
}

export default function CursorEffect({ mousePosition }: CursorEffectProps) {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 ease-in-out"
      animate={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`,
      }}
    />
  )
}

