import { useState } from 'react';
function Show() {
    const [block, setBlock] = useState(true);
    return ( 
        <div>
            <button onClick={() => setBlock(!block)}>Показать или скрыть</button>
            <p style={{display: block ? 'block' : 'none' }}>Любой текст внутри параграфа</p>
        </div>
     );
}

export default Show;