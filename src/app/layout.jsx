"use client"
import "@styles/globals.css"
import { createRef, useEffect, useRef } from "react"

export const metadata = {
  title: "jay-portfolio-nextjs",
  description: "This is a personla website portfolio created in next js and deployed on aws amplify"
}

const RootLayout = ({ children }) => {

  const canvasRef = createRef()

  useEffect(() => {

    // Particle follows the mouse

    const canvas = canvasRef.current
    const c = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight

    const radiusInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2
    }

    // Event Listeners
    addEventListener('mousemove', (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    })

    addEventListener('resize', () => {
      canvas.width = innerWidth
      canvas.height = innerHeight

      init()
    })

    // Objects
    class Particle {
      constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.radians = Math.random() * Math.PI * 2
        this.velocity = 0.05
        this.pathRadius = radiusInRange(50, 120)
        this.lastMouse = { x: x, y: y }
      }

      update() {
        const lastPoint = { x: this.x, y: this.y }
        this.radians += this.velocity;

        //drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05

        this.x = this.lastMouse.x + Math.cos(this.radians) * this.pathRadius;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.pathRadius;
        this.draw(lastPoint);
      }

      draw(lastPoint) {
        c.beginPath()
        c.strokeStyle = this.color
        c.lineWidth = this.radius
        c.moveTo(lastPoint.x, lastPoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        c.closePath()
      }

    }

    // Implementation
    let particles
    function init() {
      particles = []

      for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 2 + 1;
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, 'rgba(255,255,255,0.3)'))
      }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate)
      c.fillStyle = 'rgba(0,0,0,0.09)'
      c.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
      })
    }

    init()
    animate()

  }, [])

  return (
    <html lang="en">
      <body>
        <canvas ref={canvasRef} className="canvas1"></canvas>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout