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

    const intInRange = (min, max) => {
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
    class Line {
      constructor(x1, y1, x2, y2, thickness, color) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.thickness = thickness
        this.color = color
        this.velocity = 0.05
      }

      // update() {
      //   const lastPoint = { x: this.x, y: this.y }
      //   this.radians += this.velocity;

      //   //drag effect
      //   this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05
      //   this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05

      //   this.x = this.lastMouse.x + Math.cos(this.radians) * this.pathRadius;
      //   this.y = this.lastMouse.y + Math.sin(this.radians) * this.pathRadius;
      //   this.draw(lastPoint);
      // }

      draw() {
        c.beginPath()
        c.strokeStyle = this.color
        c.lineWidth = this.radius
        c.moveTo(this.x1, this.y1)
        c.lineTo(this.x2, this.y2)
        c.stroke()
        c.closePath()
      }

    }

    // Implementation
    let linesX
    let linesY
    function init() {
      linesX = []
      linesY = []
      let gridsize = 5;
      let xIncrement = canvas.width/gridsize
      let yIncrement = canvas.height/gridsize
      console.log(xIncrement)

      let xpos = 0
      let ypos = 0
      for (let i = 0; i < gridsize; i++) {
        const thickness = Math.random() * 1 + 1;
        linesX.push(new Line(xpos, 0, xpos, canvas.height, thickness, 'rgb(255,255,255, 0.25)'))
        xpos += xIncrement
      }

      for (let i = 0; i < gridsize; i++) {
        const thickness = Math.random() * 1 + 1;
        linesY.push(new Line(0, ypos, canvas.width, ypos, thickness, 'rgb(255,255,255, 0.25)'))
        ypos += yIncrement
      }
    }
    // Animation Loop
    function animate() {
      requestAnimationFrame(animate)
      c.fillStyle = 'rgb(0,0,0)'
      c.fillRect(0, 0, canvas.width, canvas.height)
      // c.clearRect(0,0,canvas.width,canvas.height)

      linesX.forEach(line => {
        line.draw()
      })

      linesY.forEach(line => {
        line.draw()
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