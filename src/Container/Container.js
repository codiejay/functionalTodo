import React, { useState, useEffect } from "react";
import firebase from 'firebase';

//Components
import TaskLists from '../TaskLists/TaskLists';
import UserBar from '../UserBar/UserBar';
import UserInput from '../UserInput/UserInput';
import TaskHead from '../TaskHead/TaskHead';

//Component being start building here
const Container = (props) => {
  let user = firebase.auth().currentUser;
  //FIREBASE USERDATA: 
  let userFullName = props.realUserName;
  let userId = props.userId;

    const Getdata = () => { 
      let db = firebase.firestore();
      return db.collection(user.uid)
        .orderBy('taskname')
        .get()
  }

  //Push in data from firestore database here- 
  // this runs just once;
  useEffect(() => { 
    let newArr = [];
    Getdata()
      .then(data => {
        data.forEach(doc => {
          newArr.push(doc.data());
        });
        setstoredtasks(storedtasks.concat(newArr))
      })
  }, [])

  //useStates
  const [tasks, setTasks] = useState([]);
  let [userinput, setUserInput] = useState('');
  let [storedtasks, setstoredtasks] = useState([]);
  let [uniqueId, setuniqueId] = useState([]);
  //userInput  Handler
  const handleuserInputChange = (event) => { 
    setUserInput(userinput = event.target.value);
  }

  //form submit Handler.
  const handleformSubmit = (e) => { 
    e.preventDefault();
    if(userinput) { 
      setuniqueId( uniqueId = new Date().getTime() );
      let db = firebase.firestore();
      db.collection(`${userId}`)
        .add({
          taskname: userinput,
          uniqueId: uniqueId,
          done: false,
        });
      setTasks(tasks.concat({userinput: userinput, uniqueId:uniqueId}));
      setUserInput('');
    }
  }
  return (
    <div id='container'>
      <UserBar 
        username={userFullName}
        signoutUser={props.signoutUser}
      />
      <TaskHead 
        uid = {userId}
      />
      <TaskLists 
        storedTasks={storedtasks} 
        currentTasks={tasks}
        username={userFullName}
      />
      <UserInput 
        userInputChange={handleuserInputChange}
        taskformSubmitted={handleformSubmit}
        inputValue={userinput}
      />
    </div>
  )
}

export default Container;