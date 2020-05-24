import React, { useState } from "react";

//Components
import UserInput from '../UserInput/UserInput';
import AddTaskBttn from '../AddTaskBttn/AddTaskBttn';
import TaskLists from '../TaskLists/TaskLists';
import IndividualTask from '../IndividualTask/IndividualTask';
const Container = (props) => { 
  
  const [tasks, setTasks] = useState([[]]);
  let [userinput, setUserInput] = useState('');

  //Button Click Handler
  const handleaddBttnClicked = () => { 
    setTasks(tasks.concat(
      <IndividualTask taskName={userinput} />
    ))
  }
  //userInput  Handler
  const handleuserInputChange = (event) => { 
    setUserInput(userinput = event.target.value);
  }



  return ( 
    <div id='container'>
      <UserInput userInputChange={handleuserInputChange}/>
      <AddTaskBttn addBttnClicked={handleaddBttnClicked}/>
      <TaskLists 
      taskname={tasks}
      />
    </div>
  )
}

export default Container;