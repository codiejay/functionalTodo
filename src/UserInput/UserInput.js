import React, { useState } from 'react';
import './UserInput.css';

const UserInput = (props) => { 
  return (
    <form id='userInput' onSubmit={props.taskformSubmitted}>
      <input 
        placeholder='type your task here' 
        onChange={props.userInputChange} 
        value={props.inputValue}
      />
      <button 
        id='addTaskBttn' 
      >
        Add Task
      </button>
    </form>
  ) 
}

export default UserInput;