import React, { useState } from 'react';
import './UserInput.css';

const UserInput = (props) => { 
  return (
    <div id='userInput'>
      <input placeholder='type your task here' onChange={props.userInputChange}></input>
    </div>
  ) 
}

export default UserInput;