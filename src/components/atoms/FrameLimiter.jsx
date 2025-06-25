import React, { useEffect, useRef, useState } from 'react'
import { useThree } from '@react-three/fiber'

export default function FrameLimiter() {
  const { invalidate } = useThree()
  const frameRef = useRef()
  const [frameCount, setFrameCount] = useState(0)
  const [fps, setFps] = useState(0)
  const lastFpsUpdate = useRef(performance.now())

  useEffect(() => {
    let last = performance.now()
    const targetFps = 60
    const interval = 1000 / targetFps

    const loop = () => {
      const now = performance.now()

      // Trigger render at fixed interval
      if (now - last >= interval) {
        invalidate()
        last = now
        setFrameCount(prev => prev + 1)
      }

      // Update FPS every second
      if (now - lastFpsUpdate.current >= 1000) {
        setFps(frameCount)
        setFrameCount(0)
        console.log(fps)
        lastFpsUpdate.current = now
      }

      frameRef.current = requestAnimationFrame(loop)
    }

    frameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameRef.current)
  }, [invalidate, frameCount])

  return null;
}
