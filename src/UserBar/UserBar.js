import React, { useState } from 'react';
import './UserBar.css'

const UserBar = (props) => { 

  return ( 
    <div className="userBar">
      <div></div>
      <h1>{props.username}</h1>
      <div className="userSign">
        <button onClick={props.signoutUser}>Sign Out</button>
      </div>
    </div>
  )
}

export default UserBar;