"use client"

import { motion, type MotionValue, useTransform, useAnimation, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface InteractiveShapesProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  isTyping: boolean
  isPassword: boolean
}

export default function InteractiveShapes({ mouseX, mouseY, isTyping, isPassword }: InteractiveShapesProps) {
  const controls = useAnimation()
  const [isBlinking, setIsBlinking] = useState(false)

  // Base transforms
  const cursorX = useTransform(mouseX, [-200, 200], [-40, 40])
  const cursorY = useTransform(mouseY, [-200, 200], [-30, 30])
  const rotateX = useTransform(mouseY, [-200, 200], [10, -10])
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15])

  // Eye transforms
  const eyeX = useTransform(mouseX, [-200, 200], [-8, 8])
  const eyeY = useTransform(mouseY, [-200, 200], [-4, 4])
  const pupilLeft = useTransform(mouseX, [-200, 200], ["20%", "80%"])
  const pupilTop = useTransform(mouseY, [-200, 200], ["20%", "80%"])
  const smallEyeX = useTransform(mouseX, [-200, 200], [-6, 6])
  const smallEyeY = useTransform(mouseY, [-200, 200], [-3, 3])
  const eyebrowRotate = useTransform(mouseY, [-200, 200], [-15, 15])
  const eyebrowY = useTransform(mouseY, [-200, 200], [-1, 1])

  // Mouth transforms
  const mouthScaleX = useTransform(mouseX, [-200, 200], [0.8, 1.2])
  const mouthRotate = useTransform(mouseX, [-200, 200], [-15, 15])
  const blackRectX = useTransform(cursorX, [-40, 40], [20, -20])
  const blackRectRotateY = useTransform(mouseX, [-200, 200], [15, -15])
  const yellowRectX = useTransform(cursorX, [-40, 40], [-30, 30])
  const yellowMouthRotate = useTransform(mouseX, [-200, 200], [-10, 10])
  const mouthOpenness = useTransform(mouseY, [-200, 200], [0.6, 1.4])

  // Orange semicircle transforms
  const orangeX = useTransform(cursorX, [-40, 40], [-35, 35])
  const orangeY = useTransform(cursorY, [-30, 30], [-15, 0])
  const orangeRotateX = useTransform(mouseY, [-200, 200], [5, -5])
  const orangeRotateY = useTransform(mouseX, [-200, 200], [-10, 10])
  const smileScaleX = useTransform(mouseX, [-200, 200], [0.8, 1.2])
  const smileScaleY = useTransform(mouseY, [-200, 200], [0.8, 1.2])
  const smileRotate = useTransform(mouseX, [-200, 200], [-15, 15])

  // Blinking animation for password typing
  useEffect(() => {
    if (isPassword) {
      const blinkInterval = setInterval(() => {
        setIsBlinking(prev => !prev)
      }, 400)
      return () => clearInterval(blinkInterval)
    } else {
      setIsBlinking(false)
    }
  }, [isPassword])

  // Enhanced typing animation
  useEffect(() => {
    if (isTyping) {
      controls.start({
        scale: [1, 1.1, 0.95, 1.05, 1],
        rotate: [0, -3, 3, -2, 2, 0],
        y: [0, -5, 5, -3, 3, 0],
        transition: { 
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        },
      })
    } else {
      controls.start({ 
        scale: 1, 
        rotate: 0,
        y: 0,
        transition: { 
          type: "spring",
          stiffness: 200,
          damping: 10
        }
      })
    }
  }, [isTyping, controls])

  return (
    <div className="relative w-[600px] h-[400px] select-none">
      {/* Purple Rectangle */}
      <motion.div
        className="absolute left-[120px] top-0 w-[120px] h-[200px] bg-[#6C63FF] rounded-2xl cursor-pointer shadow-lg"
        animate={controls}
        style={{
          x: cursorX,
          y: cursorY,
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        whileHover={{
          scale: 1.2,
          boxShadow: "0 0 40px rgba(108, 99, 255, 0.6)",
          transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.4 }
        }}
      >
        <div className="relative w-full h-full flex flex-col items-center pt-12">
          <motion.div className="flex justify-center space-x-5 mb-4">
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-4 h-2.5 bg-white rounded-full relative overflow-hidden"
                  style={{ x: eyeX, y: eyeY }}
                  initial={{ scaleY: 1 }}
                  exit={{ scaleY: 0.1 }}
                >
                  <motion.div 
                    className="absolute w-2 h-2 bg-[#6C63FF] rounded-full"
                    style={{ left: pupilLeft, top: pupilTop }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-4 h-0.5 bg-white rounded-full mt-1"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-4 h-2.5 bg-white rounded-full relative overflow-hidden"
                  style={{ x: eyeX, y: eyeY }}
                  initial={{ scaleY: 1 }}
                  exit={{ scaleY: 0.1 }}
                >
                  <motion.div 
                    className="absolute w-2 h-2 bg-[#6C63FF] rounded-full"
                    style={{ left: pupilLeft, top: pupilTop }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-4 h-0.5 bg-white rounded-full mt-1"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div 
            className="w-6 h-1 bg-white rounded-full mt-2"
            style={{
              scaleX: mouthScaleX,
              rotate: mouthRotate
            }}
          />
        </div>
      </motion.div>

      {/* Black Rectangle */}
      <motion.div
        className="absolute left-[260px] top-[40px] w-[100px] h-[160px] bg-black rounded-2xl cursor-pointer shadow-xl"
        animate={controls}
        style={{
          x: blackRectX,
          y: cursorY,
          rotateX,
          rotateY: blackRectRotateY,
          transformPerspective: 1000,
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "#1a1a1a",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.4)",
          transition: { type: "spring", stiffness: 400, damping: 8, duration: 0.5 }
        }}
      >
        <div className="relative w-full h-full flex flex-col items-center pt-10">
          <motion.div className="flex justify-center space-x-4">
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-2.5 h-2.5 bg-white rounded-full"
                  style={{ x: smallEyeX, y: smallEyeY }}
                  initial={{ scale: 1 }}
                  exit={{ scale: 0.1 }}
                />
              ) : (
                <motion.div 
                  className="w-2.5 h-0.5 bg-white rounded-full"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-2.5 h-2.5 bg-white rounded-full"
                  style={{ x: smallEyeX, y: smallEyeY }}
                  initial={{ scale: 1 }}
                  exit={{ scale: 0.1 }}
                />
              ) : (
                <motion.div 
                  className="w-2.5 h-0.5 bg-white rounded-full"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      {/* Yellow Rectangle */}
      <motion.div
        className="absolute right-[80px] top-[80px] w-[120px] h-[160px] bg-[#FFD700] rounded-2xl cursor-pointer shadow-lg"
        animate={controls}
        style={{
          x: yellowRectX,
          y: cursorY,
          rotateX,
          rotateY: blackRectRotateY,
          transformPerspective: 1000,
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "#FFE44D",
          y: "-10%",
          transition: { type: "spring", stiffness: 400, damping: 8, duration: 0.6 }
        }}
      >
        <div className="relative w-full h-full flex flex-col items-center pt-10">
          {/* Eyebrows */}
          <motion.div className="flex justify-center space-x-5 mb-2">
            <motion.div 
              className="w-4 h-0.5 bg-black rounded-full"
              style={{
                rotate: eyebrowRotate,
                y: eyebrowY,
                originX: 1
              }}
            />
            <motion.div 
              className="w-4 h-0.5 bg-black rounded-full"
              style={{
                rotate: eyebrowRotate,
                y: eyebrowY,
                originX: 0
              }}
            />
          </motion.div>

          {/* Eyes */}
          <motion.div className="flex justify-center space-x-4 mb-4">
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-3.5 h-3.5 bg-black rounded-full relative overflow-hidden"
                  style={{ x: smallEyeX, y: smallEyeY }}
                  initial={{ scale: 1 }}
                  exit={{ scale: 0.1 }}
                >
                  <motion.div 
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    style={{ 
                      left: pupilLeft,
                      top: pupilTop,
                      scale: 1.2
                    }}
                  />
                  <motion.div 
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{ 
                      left: "70%",
                      top: "20%",
                      opacity: 0.6
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-3.5 h-0.5 bg-black rounded-full mt-1.5"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-3.5 h-3.5 bg-black rounded-full relative overflow-hidden"
                  style={{ x: smallEyeX, y: smallEyeY }}
                  initial={{ scale: 1 }}
                  exit={{ scale: 0.1 }}
                >
                  <motion.div 
                    className="absolute w-1.5 h-1.5 bg-white rounded-full"
                    style={{ 
                      left: pupilLeft,
                      top: pupilTop,
                      scale: 1.2
                    }}
                  />
                  <motion.div 
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{ 
                      left: "70%",
                      top: "20%",
                      opacity: 0.6
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-3.5 h-0.5 bg-black rounded-full mt-1.5"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Nose */}
          <motion.div 
            className="w-2.5 h-3 bg-[#FFB700] rounded-full mb-3 relative"
            style={{
              x: useTransform(mouseX, [-200, 200], [-2, 2]),
              y: useTransform(mouseY, [-200, 200], [-1, 1]),
              rotateY: useTransform(mouseX, [-200, 200], [-15, 15])
            }}
          >
            <motion.div 
              className="w-1 h-1 bg-black rounded-full absolute right-0.5 top-1"
              style={{
                opacity: useTransform(mouseX, [-200, 200], [0.3, 0.6])
              }}
            />
            <motion.div 
              className="w-0.5 h-0.5 bg-white rounded-full absolute left-0.5 top-0.5"
              style={{
                opacity: 0.6
              }}
            />
          </motion.div>

          {/* Mouth */}
          <motion.div 
            className="relative w-10 h-4 overflow-hidden"
            style={{
              scaleX: mouthScaleX,
              rotate: yellowMouthRotate
            }}
          >
            <motion.div 
              className="absolute w-10 h-8 border-2 border-black rounded-full bottom-0"
              style={{
                scaleY: mouthOpenness
              }}
            >
              <motion.div 
                className="absolute w-8 h-2 bg-[#FF1744] rounded-full left-1 top-4"
                style={{
                  opacity: useTransform(mouseY, [-200, 200], [0.3, 0.8])
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Orange Semi-circle */}
      <motion.div
        className="absolute left-[80px] bottom-0 w-[160px] h-[80px] bg-[#FF7043] rounded-t-[80px] overflow-hidden cursor-pointer shadow-lg"
        animate={controls}
        style={{
          x: orangeX,
          y: orangeY,
          rotateX: orangeRotateX,
          rotateY: orangeRotateY,
          transformPerspective: 1000,
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "#FF8A65",
          y: "-20%",
          transition: { type: "spring", stiffness: 500, damping: 8, duration: 0.7 }
        }}
      >
        <div className="relative w-full h-full flex flex-col items-center pt-4">
          {/* Eyebrows */}
          <motion.div className="flex justify-center space-x-10 mb-1">
            <motion.div 
              className="w-5 h-0.5 bg-white rounded-full"
              style={{
                rotate: eyebrowRotate,
                y: eyebrowY,
                originX: 1
              }}
            />
            <motion.div 
              className="w-5 h-0.5 bg-white rounded-full"
              style={{
                rotate: eyebrowRotate,
                y: eyebrowY,
                originX: 0
              }}
            />
          </motion.div>

          {/* Eyes */}
          <motion.div className="flex justify-center space-x-8 mb-3">
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-4 h-4 bg-white rounded-full relative overflow-hidden"
                  style={{ x: eyeX, y: eyeY }}
                  initial={{ scale: 1 }}
                  exit={{ scale: 0.1 }}
                >
                  <motion.div 
                    className="absolute w-2 h-2 bg-black rounded-full"
                    style={{ 
                      left: pupilLeft,
                      top: pupilTop,
                      scale: 1.2
                    }}
                  />
                  <motion.div 
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{ 
                      left: "70%",
                      top: "20%",
                      opacity: 0.8
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-4 h-0.5 bg-white rounded-full mt-2"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!isBlinking ? (
                <motion.div 
                  className="w-4 h-4 bg-white rounded-full relative overflow-hidden"
                  style={{ x: eyeX, y: eyeY }}
                  initial={{ scale: 1 }}
                  exit={{ scale: 0.1 }}
                >
                  <motion.div 
                    className="absolute w-2 h-2 bg-black rounded-full"
                    style={{ 
                      left: pupilLeft,
                      top: pupilTop,
                      scale: 1.2
                    }}
                  />
                  <motion.div 
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{ 
                      left: "70%",
                      top: "20%",
                      opacity: 0.8
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className="w-4 h-0.5 bg-white rounded-full mt-2"
                  initial={{ scaleY: 0.1 }}
                  animate={{ scaleY: 1 }}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Nose */}
          <motion.div 
            className="w-3 h-3 bg-[#FF5722] rounded-full mb-2 relative"
            style={{
              x: useTransform(mouseX, [-200, 200], [-2, 2]),
              y: useTransform(mouseY, [-200, 200], [-1, 1]),
              rotateY: useTransform(mouseX, [-200, 200], [-15, 15])
            }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full absolute right-0.5 top-0.5"
              style={{
                opacity: useTransform(mouseX, [-200, 200], [0.3, 0.6])
              }}
            />
            <motion.div 
              className="w-0.5 h-0.5 bg-white rounded-full absolute left-0.5 top-0.5"
              style={{
                opacity: 0.8
              }}
            />
          </motion.div>

          {/* Orange shape mouth - updated version */}
          <motion.div 
            className="relative w-16 h-6"
            style={{
              scaleX: smileScaleX,
              scaleY: smileScaleY,
              rotate: smileRotate
            }}
          >
            <motion.div 
              className="absolute w-full h-full"
              style={{
                scaleY: mouthOpenness
              }}
            >
              {/* Main smile curve */}
              <motion.div 
                className="absolute w-full h-4 border-b-4 border-white rounded-[50%]"
                style={{
                  scaleY: useTransform(mouseY, [-200, 200], [0.8, 1.2])
                }}
              />
              
              {/* Dimples */}
              <motion.div 
                className="absolute w-1.5 h-1.5 bg-[#FF5722] rounded-full left-1 top-1"
                style={{
                  opacity: useTransform(mouseY, [-200, 200], [0.4, 0.8])
                }}
              />
              <motion.div 
                className="absolute w-1.5 h-1.5 bg-[#FF5722] rounded-full right-1 top-1"
                style={{
                  opacity: useTransform(mouseY, [-200, 200], [0.4, 0.8])
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
