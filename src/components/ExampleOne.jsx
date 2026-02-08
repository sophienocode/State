import React, { useState } from 'react'

export default function ExampleOne() {

    const [ count , setCount ] = useState(() => {
        const initialCount = 10;
        return initialCount;
    })

    const increment = () => (
        setCount((prevCount) => prevCount + 1)
    )


  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={increment} >Increment</button>
    </>
  )
}
