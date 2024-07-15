import "./App.css"
import React, { useState } from 'react'

const Authy = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    
      <div>
        
        <h1 style={{color: isLoggedIn ? "indigo" : "teal"}}>{isLoggedIn? "Welcome!":"want to  Login"}</h1>
        <button onClick={()=>handleClick()}>Toggle Login</button>
      </div>
  )
}

export default Authy