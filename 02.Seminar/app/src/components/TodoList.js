import React, { useState } from 'react'

export default function TodoList() {
    const [list, setList] = useState([])
  return (
    <div>
        <ul>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <input type="text" class="text" />
        <button onClick={() => setList(prev => [...prev, document.querySelector('.text').value])}>add</button>
    </div>
  )
}
