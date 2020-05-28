import React, { useState } from "react";
import firebase from 'firebase';

//Components
import UserInput from '../UserInput/UserInput';
import TaskLists from '../TaskLists/TaskLists';
import IndividualTask from '../IndividualTask/IndividualTask';
const Container = (props) => { 
  
  const [tasks, setTasks] = useState([[]]);
  let [userinput, setUserInput] = useState('');
  //userInput  Handler
  const handleuserInputChange = (event) => { 
    setUserInput(userinput = event.target.value);
  }

  const handleformSubmit = (e) => { 
    e.preventDefault();
    
    if(Boolean(userinput)) { 
      let db = firebase.firestore();

      db.collection('usersTask')
        .add({ 
          taskName: userinput
        })
      setTasks(tasks.concat(
        <IndividualTask taskName={userinput} />
        ));
      setUserInput(userinput = ' ');
      console.log(tasks)
    }
  }
  return ( 
    <div id='container'>
      <UserInput 
        userInputChange={handleuserInputChange}
        taskformSubmitted={handleformSubmit}
        inputValue={userinput}
      />
      <TaskLists taskLists={tasks} />
    </div>
  )
}

export default Container;