import React, { useState } from 'react';
import IndividualTask from '../IndividualTask/IndividualTask';
import './TaskLists.css';

const TaskLists = (props) => { 
  return (
    <ul id='taskList'>
      <IndividualTask taskName={props.taskname}/>
    </ul>
  )
}

export default TaskLists;