import React, { useState, useEffect } from "react";
import firebase from 'firebase';

//Components
import UserInput from '../UserInput/UserInput';
import TaskLists from '../TaskLists/TaskLists';

const Getdata = () => { 
  const [allTask, setallTask] = useState([]);
  let newTaskArr = [];
  useEffect(() => { 
    firebase
      .firestore()
        .collection('usersTask')
        .orderBy('taskname')
        .get()
          .then((doc) => { 
            doc.docs.map(item => { 
              newTaskArr.push(item.data().taskname);
            })
            setallTask(allTask.concat(newTaskArr));
          })
         
  }, [])
  return allTask;
  }


//Component being start building here
const Container = (props) => {
  let newArr = Getdata();
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
        storedTasks={newArr} 
        currentTasks={tasks}
      />
    </div>
  )
}

export default Container;