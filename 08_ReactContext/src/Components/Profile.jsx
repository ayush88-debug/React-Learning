import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Profile() {
  const {user}=useContext(UserContext)
  if(user){
    return(
    <div>
      Username: {user.username} <br/>
      Password: {user.Password}
    </div>
    )
  }
  else{
    return(
      <div>
        No User Found
      </div>
    )
  }
}
export default Profile
