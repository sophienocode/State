import React, { useState } from 'react'

export default function Counter() {

    const [ count, setCount] = useState(0);

    const handleClick = () => {
        setCount( count + 1);
    }

  return (
    <>
      <h1>Numbers: {count} </h1>
      <button onClick={handleClick} > Increase Numbers </button>
    </>
  )
}
