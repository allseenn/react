import React, { useState } from 'react'
import Button from '@mui/material/Button';


export default function Parent() {
    const [count, setCount] = useState(0)
    console.log('parent render');
    const upCount = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h2>Parent</h2>
        <ChildCounter count={count}/>
        <Button variant="contained" onClick={upCount}>Plus 1</Button>
    </div>
  )
}


function ChildCounter({count}) {
  console.log('child render');
  return (
    <div>
        <p>Counter inside</p>
        <p>inside counter {count}</p>
    </div>
  )
}

