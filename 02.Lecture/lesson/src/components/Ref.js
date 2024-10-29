import React, { useEffect, useRef } from 'react'

export default function Ref() {
    const inputRef = useRef(null)
    const handleClick = () => {
      inputRef.current.focus()
    }
    useEffect(() => {
      inputRef.current.focus()
    })
    
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus</button>
    </div>
  )
}
