import React, { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

export default function FrameLimiter({ fpsTarget = 60 }) {
  const { invalidate, clock } = useThree()
  const frameRef = useRef()
  const frameCount = useRef(0)
  const lastFpsUpdate = useRef(clock.getElapsedTime())
  const lastRender = useRef(clock.getElapsedTime())

  useEffect(() => {
    const interval = 1000 / fpsTarget // seconds, not ms
    const loop = () => {
      const now = clock.getElapsedTime() * 1000 // seconds

      if (now - lastRender.current >= interval) {
        invalidate()
        lastRender.current = now
        frameCount.current++
      }

      if (now - lastFpsUpdate.current >= 1000) {
        console.log('FPS:', frameCount.current)
        frameCount.current = 0
        lastFpsUpdate.current = now
      }

      frameRef.current = requestAnimationFrame(loop)
    }

    frameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameRef.current)
  }, [invalidate, fpsTarget, clock])

  return null
}
