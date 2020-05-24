import React, { useState } from 'react';
import './AddTaskBttn.css';

const  AddTaskBttn = (props) => { 

  return ( 
    <button id='addTaskBttn' onClick={props.addBttnClicked}>Add Task</button>
  )
}

export default AddTaskBttn;