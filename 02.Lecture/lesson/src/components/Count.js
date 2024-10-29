import { useState } from "react";

function Count() {
    let [count, setCount] = useState(0)
    return ( 
        <div>
            <h3>{count}</h3>
            <br />
            <button onClick={() => setCount(prev => ++prev)}>count + 1</button>
        </div>
     );
}

export default Count;