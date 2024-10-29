import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date())
      }, 10000)
    
      return () => {
        clearInterval(timer)
      }
    })
    
  return (
    <div>Время {time.toLocaleTimeString()}</div>
  )
}
