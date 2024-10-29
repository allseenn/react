import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(prev => ++prev)}>Click</button>
    </>
  )
}
