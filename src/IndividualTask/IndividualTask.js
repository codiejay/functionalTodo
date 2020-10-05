import React, { useState } from 'react';
import './IndividualTask.css';

const IndividualTask = (props) => { 

  const taskEdited = (e) => { 
    setTask(`${e.target.value}`);
  }

  let [task, setTask] = useState(props.taskName);
  return (
      <div 
        id='individualTask'
        data-type= {props.uniqueID}
        style={{ 
          opacity: `${(props.blurtask) ? 0.3 : 1}`
        }}
      >
        <div>
          <span
            id='checked'
            onClick={props.unCheckBttnClicked}
          >
          </span>
          <span
            id='unchecked'
            onClick={props.checkBttnClicked}            
          >
          </span>
        </div>
        <input
          onChange={taskEdited}
          value={task}
        />
      </div>
  )
};

export default IndividualTask;