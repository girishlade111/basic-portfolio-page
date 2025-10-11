"use client"

import { useEffect, useRef } from "react"

export default function InterstellarNebula() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.005

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create deep space background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height),
      )
      bgGradient.addColorStop(0, "rgba(15, 23, 42, 1)")
      bgGradient.addColorStop(0.5, "rgba(30, 41, 59, 1)")
      bgGradient.addColorStop(1, "rgba(0, 0, 0, 1)")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Golden/Orange nebula clouds
      const drawNebulaCloud = (x: number, y: number, size: number, color1: string, color2: string, offset: number) => {
        const animatedX = x + Math.sin(time + offset) * 20
        const animatedY = y + Math.cos(time * 0.7 + offset) * 15
        const animatedSize = size + Math.sin(time * 2 + offset) * 10

        const gradient = ctx.createRadialGradient(animatedX, animatedY, 0, animatedX, animatedY, animatedSize)
        gradient.addColorStop(0, color1)
        gradient.addColorStop(0.4, color2)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(animatedX - animatedSize, animatedY - animatedSize, animatedSize * 2, animatedSize * 2)
      }

      // Multiple nebula layers with cosmic colors
      ctx.globalCompositeOperation = "screen"

      // Golden/Orange clouds (like the reference images)
      drawNebulaCloud(
        canvas.width * 0.3,
        canvas.height * 0.4,
        200,
        "rgba(255, 165, 0, 0.3)",
        "rgba(255, 140, 0, 0.1)",
        0,
      )
      drawNebulaCloud(
        canvas.width * 0.7,
        canvas.height * 0.3,
        180,
        "rgba(255, 215, 0, 0.25)",
        "rgba(255, 165, 0, 0.08)",
        1.5,
      )
      drawNebulaCloud(
        canvas.width * 0.2,
        canvas.height * 0.7,
        160,
        "rgba(255, 140, 0, 0.28)",
        "rgba(255, 100, 0, 0.12)",
        3,
      )

      // Blue/Cyan clouds
      drawNebulaCloud(
        canvas.width * 0.6,
        canvas.height * 0.6,
        190,
        "rgba(0, 191, 255, 0.25)",
        "rgba(30, 144, 255, 0.1)",
        2,
      )
      drawNebulaCloud(
        canvas.width * 0.4,
        canvas.height * 0.2,
        170,
        "rgba(135, 206, 250, 0.22)",
        "rgba(70, 130, 180, 0.08)",
        4,
      )
      drawNebulaCloud(
        canvas.width * 0.8,
        canvas.height * 0.8,
        150,
        "rgba(100, 149, 237, 0.2)",
        "rgba(65, 105, 225, 0.07)",
        5.5,
      )

      // Bright central core
      const coreX = canvas.width * 0.5 + Math.sin(time * 0.3) * 30
      const coreY = canvas.height * 0.5 + Math.cos(time * 0.4) * 25
      const coreGradient = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, 100)
      coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.4)")
      coreGradient.addColorStop(0.3, "rgba(173, 216, 230, 0.2)")
      coreGradient.addColorStop(1, "rgba(0, 0, 0, 0)")
      ctx.fillStyle = coreGradient
      ctx.fillRect(coreX - 100, coreY - 100, 200, 200)

      ctx.globalCompositeOperation = "source-over"

      for (let i = 0; i < 100; i++) {
        const starX = (i * 137.5) % canvas.width
        const starY = (i * 197.3) % canvas.height
        const twinkle = Math.sin(time * 3 + i) * 0.5 + 0.5
        const brightness = twinkle * 0.8 + 0.2

        ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`
        ctx.fillRect(starX, starY, 1, 1)

        // Larger bright stars
        if (i % 15 === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.6})`
          ctx.fillRect(starX - 1, starY - 1, 3, 3)
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} />
}
