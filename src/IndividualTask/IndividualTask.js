import React, { useState } from 'react';
import './IndividualTask.css';

const IndividualTask = (props) => { 
  return (
      <li id='individualTask'>{props.taskName}</li>
  )
};

export default IndividualTask;