import React, { useState } from 'react'

export default function Counter() {
    const [Counter, setCounter] = useState(0)
  return (
    <div>
        <h1>{Counter}</h1>
        <button onClick={() => setCounter(prev => ++prev)}>Plus one</button>
        <button onClick={() => setCounter(prev => --prev)}>Minus one</button>
    </div>
  )
}
