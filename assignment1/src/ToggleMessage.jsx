
import React from 'react'
import { useState } from 'react'



const Massege = () => {
    const [isToggled, setIsToggled] = useState(false)
  return (
      <>
        <h1 style={{color:isToggled ? "green" : "blue" }}>{ isToggled ? "Message is visible" : "Message is hidden"}</h1>
        <button onClick={() => setIsToggled(!isToggled)}>Toggle Message</button>
      </>
  )
}

export default Massege