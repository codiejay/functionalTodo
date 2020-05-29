import React, { useState, useEffect } from "react";
import firebase from 'firebase';

//Components
import UserInput from '../UserInput/UserInput';
import TaskLists from '../TaskLists/TaskLists';
import IndividualTask from '../IndividualTask/IndividualTask';

const AllTask = () => { 
  let [alltasks, setTasks] = useState([]);

  let db = firebase.firestore();
  useEffect(() => { 
    let db = firebase.firestore();
    db.collection('usersTask')
    .orderBy('taskname')
      .onSnapshot((snapshot) => { 
        let newtaskAll = snapshot.docs.map(doc => { 
          return doc.data().taskname;
        })
        setTasks(alltasks.concat(newtaskAll));
      })
  }, [])
  return alltasks;
}


//Component being start building here
const Container = (props) => { 
  let allTasks = AllTask()
  //useStates
  const [tasks, setTasks] = useState([]);
  let [userinput, setUserInput] = useState('');

  //userInput  Handler
  const handleuserInputChange = (event) => { 
    setUserInput(userinput = event.target.value);
  }
      
  //form submit Handler.
  const handleformSubmit = (e) => { 
    e.preventDefault();
    if(userinput) { 
      console.log('dd')
      let db = firebase.firestore();
      db.collection('usersTask')
      .add({
        taskname: userinput
      });
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
      <TaskLists taskLists={allTasks} />
    </div>
  )
}

export default Container;