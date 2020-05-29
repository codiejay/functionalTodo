import React, { useState } from 'react';
import IndividualTask from '../IndividualTask/IndividualTask';
import './TaskLists.css';

const TaskLists = (props) => { 
  return (
    <ul id='taskList'>
      {props.taskLists.map(item => {
        return ( 
        <IndividualTask taskName={item} />
        )
      })}
    </ul>
  )
}

export default TaskLists;