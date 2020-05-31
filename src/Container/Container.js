import React, { useState, useEffect } from "react";
import firebase from 'firebase';

//Components
import UserInput from '../UserInput/UserInput';
import TaskLists from '../TaskLists/TaskLists';

  const Getdata = () => { 
    let db = firebase.firestore();

    return db.collection('usersTask')
      .orderBy('taskname')
      .get()
  }

//Component being start building here
const Container = (props) => {
  //Push in data from firestore database here- 
  // this runs just once;
  useEffect(() => { 
    let newArr = [];
    Getdata()
      .then(data => {
        data.forEach(doc => {
          newArr.push(doc.data().taskname);
        });
        setstoredtasks(storedtasks.concat(newArr))
      })
  }, [])


  //useStates
  const [tasks, setTasks] = useState([]);
  let [userinput, setUserInput] = useState('');
  let [storedtasks, setstoredtasks] = useState([]);
  //userInput  Handler
  const handleuserInputChange = (event) => { 
    setUserInput(userinput = event.target.value);
  }

  //form submit Handler.
  const handleformSubmit = (e) => { 
    e.preventDefault();
    if(userinput) { 
      let db = firebase.firestore();
      db.collection('usersTask')
      .add({
        taskname: userinput
      });
      setTasks(tasks.concat(userinput));
      setUserInput('');
    }
  }

  return ( 
    <div id='container'>
      <UserInput 
        userInputChange={handleuserInputChange}
        taskformSubmitted={handleformSubmit}
        inputValue={userinput}
      />
      <TaskLists 
        storedTasks={storedtasks} 
        currentTasks={tasks}
      />
    </div>
  )
}

export default Container;