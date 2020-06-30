import React, { useState } from 'react';
import './UserInput.scss';

const UserInput = (props) => { 
  return (
    <form id='userInput' onSubmit={props.taskformSubmitted}>
      <input 
        placeholder='TYPE HERE TO ADD NEW TASK' 
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