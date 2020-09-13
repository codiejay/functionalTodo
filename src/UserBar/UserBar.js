import React, { useState } from 'react';
import './UserBar.scss'

const UserBar = (props) => { 

  return ( 
    <div className="userBar">
      <h1>{props.username}</h1>
      <div className="userSign">
        <button onClick={props.signoutUser}>Sign Out</button>
      </div>
    </div>
  )
}

export default UserBar;