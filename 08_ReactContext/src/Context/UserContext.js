import React from 'react'
import { createContext } from 'react'

const UserContext=createContext()

const UserContextProvider=UserContext.Provider

export default UserContextProvider
export {UserContext}
