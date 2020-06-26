import React, { useState } from 'react';
import './IndividualTask.css';

const IndividualTask = (props) => { 
  return (
      <div 
        id={props.containerId}
        data-type= {props.uniqueID}
      >
        <li >{props.taskName}</li>
        <span 
          id="delBttn"
          onClick={props.delBttnClicked}
        >
        </span>
        <span 
          id={props.checkBttnId}
          onClick={props.checkBttnClicked}
        >
        </span>
      </div>
  )
};

export default IndividualTask;