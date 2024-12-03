import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'


export default function ChildC() {
    const User=useContext(userContext)
  return (
    <div>
        <h1>In Child C</h1>
      <h1>Name: {User.name}</h1>
      <h1>Email: {User.email}</h1>
    </div>
  )
}
