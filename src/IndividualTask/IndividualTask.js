import React, { useState } from 'react';
import './IndividualTask.css';

const IndividualTask = (props) => { 
  return (
    <div id='individualTask'>
      <p>{props.taskName}</p>
    </div>
  )
};

export default IndividualTask;