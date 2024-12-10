

import UserContextProvider from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { useState } from 'react'

function App() {
  const [user,setUser]=useState(null)  //Object

  return (
    <>
      <UserContextProvider value={{user,setUser}} >
        <div className='bg-gray-500 flex justify-center content-center flex-col h-52'>
        <Login/>
        <Profile/>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
