import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Login() {
    const [username,setUsername]=useState("")
    const [Password,setPassword]=useState("")

    const {setUser}=useContext(UserContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username,Password})
  }
   
  return (
    <div className=''>
      <div className='flex justify-center gap-6'>
      <input type="text" 
      placeholder='Username'
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      />
      <input type="text" 
      placeholder='Password'
      value={Password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      
      />
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Login
