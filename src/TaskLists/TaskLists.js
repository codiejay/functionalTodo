import React, { useState } from 'react';
import './TaskLists.css';
import firebase from 'firebase';
//Externam Components
import IndividualTask from '../IndividualTask/IndividualTask';

const TaskLists = (props) => { 
  let user = firebase.auth().currentUser
  let userFullName = props.username;
  const delData = (target) => { 
    let targetUID = parseInt(target.dataset.type);
    // get the data's ID from firebase
    let db = firebase.firestore();
    db.collection(user.uid)
      .where('uniqueId', '==', targetUID)
      .get()
      .then(data => {
        let docArr = [];
        data.docs.forEach(item => { 
          docArr.push(item.id);
        })
        db.collection(user.uid)
        .doc(docArr[0])
        .delete()
      })
  }
  const handledelBttnClicked = (e) => {
    let parentNode =  e.target.parentNode
    parentNode.setAttribute(
      'style', 
      'animation: fadeAway 0.5s 1'
    );

    parentNode.addEventListener('animationend', (e) => { 
      e.target.setAttribute('style', 'display: none')
    })

    delData(e.target.parentNode)
  }

  const handlecheckBttnClicked = (e) => { 
    let parentNode = e.target.parentNode;
    parentNode.setAttribute(
      'style',
      'animation: fadeAwayDone 0.5s 1'
      );
    parentNode.addEventListener('animationend', (e) => { 
      e.target.setAttribute('style', 'display: none')
    })
    delData(e.target.parentNode)
  };

  console.log(typeof props.currentTasks)
  return (
    <ul id='taskList'>
      <h1>TODAY'S TASKS</h1>
      {
        props.storedTasks.map(item => {
          return ( 
            <IndividualTask 
              uniqueID={item.uniqueId}
              taskName={item.taskname} 
              delBttnClicked={handledelBttnClicked}
              checkBttnClicked={handlecheckBttnClicked}
            />
          )
        })
      }
      { 
        props.currentTasks.map(item => { 
          console.log(item)
          return ( 
            <IndividualTask 
              uniqueID={item.uniqueId}
              taskName={item.userinput} 
              delBttnClicked={handledelBttnClicked}
              checkBttnClicked={handlecheckBttnClicked}
            />
          )
        })
      }
    </ul>
  )
}

export default TaskLists;