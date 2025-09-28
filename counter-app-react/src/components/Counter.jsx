import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h2>Counter App</h2>
        <h3>Count : {count}</h3>
        <button>Increment</button>
    </div>
  )
}

export default Counter