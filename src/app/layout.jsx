"use client"
import "@styles/globals.css"
import { createRef, useEffect, useRef } from "react"

const RootLayout = ({ children }) => {

  const canvasRef = createRef()

  useEffect(() => {

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

      draw() {
        c.beginPath()
        c.setLineDash([5,2]);
        c.strokeStyle = this.color
        c.lineWidth = this.radius
        c.moveTo(this.x1, this.y1)
        c.lineTo(this.x2, this.y2)
        c.stroke()
        c.closePath()
      }

    }

    // Objects
    class DrawRandomShape {
      constructor() {
        this.radius = intInRange(100, 150)
        this.x1 = intInRange(0, canvas.width)
        this.y1 = intInRange(0, canvas.height)
        this.thickness = intInRange(2, 3)
        this.color = 'rgba(255,255,255,0.1)'
      }

      draw() {
        c.beginPath()
        c.strokeStyle = this.color
        c.lineWidth = this.thickness
        c.arc(this.x1, this.y1, this.radius, 0, Math.PI * 2, false)
        c.stroke()
        c.closePath()
      }

    }

    // Implementation
    let linesX
    let linesY
    let randomShape
    function init() {
      linesX = []
      linesY = []
      randomShape = new DrawRandomShape()
      let gridsize = 5;
      let xIncrement = canvas.width / gridsize
      let yIncrement = canvas.height / gridsize
      console.log(xIncrement)

      let xpos = 0
      let ypos = 0
      for (let i = 0; i < gridsize; i++) {
        const thickness = Math.random() * 1 + 1;
        linesX.push(new Line(xpos, 0, xpos, canvas.height, thickness, 'rgb(255,255,255, 0.1)'))
        xpos += xIncrement
      }

      for (let i = 0; i < gridsize; i++) {
        const thickness = Math.random() * 1 + 1;
        linesY.push(new Line(0, ypos, canvas.width, ypos, thickness, 'rgb(255,255,255, 0.1)'))
        ypos += yIncrement
      }

      const grd = c.createLinearGradient(0, 0, canvas.width, canvas.height);
      grd.addColorStop(0, "rgba(0, 0, 0, 1)");
      grd.addColorStop(0.2, "rgba(0, 0, 0, 0.95)");
      grd.addColorStop(0.4, "rgba(0, 0, 0, 0.90)");
      grd.addColorStop(0.6, "rgba(0, 0, 0, 0.85)");
      grd.addColorStop(0.8, "rgba(0, 0, 0, 0.80)");
      grd.addColorStop(1, "rgba(0, 0, 0, 0.75)");
      c.fillStyle = grd
      c.fillRect(0, 0, canvas.width, canvas.height)

      randomShape.draw()
      linesX.forEach(line => {
        line.draw()
      })

      linesY.forEach(line => {
        line.draw()
      })
    }

    init()
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