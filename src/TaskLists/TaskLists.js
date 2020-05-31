import React, { useState } from 'react';
import IndividualTask from '../IndividualTask/IndividualTask';
import './TaskLists.css';

const TaskLists = (props) => { 
  console.log(props.storedTasks)
  return (
    <ul id='taskList'>
      {
        props.storedTasks.map(item => {
          return ( 
          <IndividualTask taskName={item} />
          )
        })
      }
      { 
        props.currentTasks.map(item => { 
          return <IndividualTask taskName={item} />
        })
      }
    </ul>
  )
}

export default TaskLists;