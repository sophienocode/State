import React from 'react'

export default function ComponentOne({ count, onClickHandler }) {

    const handleClick = () => onClickHandler()


  return (
    <>
      <section>
        <p> {count} </p>
        <button onClick={handleClick}  >Increment</button>
      </section>
    </>
  )
}
