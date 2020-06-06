import React, { useState } from 'react';
import './TaskLists.css';
import firebase from 'firebase';
//Externam Components
import IndividualTask from '../IndividualTask/IndividualTask';

const TaskLists = (props) => { 
  let userFullName = props.username;

  const delData = (target) => { 
    let targetText = target.innerText.toLowerCase();
    console.log(targetText)
    //get the data's ID from firebase
    let db = firebase.firestore();
    db.collection(`${userFullName}Tasks`)
      .where('taskname', '==', `${targetText}`)
      .get()
      .then(data => {
        let docArr = [];
        data.docs.forEach(item => { 
          console.log((item.id))
          docArr.push(item.id);
        })
        console.log(docArr)
        db.collection(`${userFullName}Tasks`)
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
  return (
    <ul id='taskList'>
      <h1>TODAY'S TASKS</h1>
      {
        props.storedTasks.map(item => {
          return ( 
            <IndividualTask 
              taskName={item} 
              delBttnClicked={handledelBttnClicked}
              checkBttnClicked={handlecheckBttnClicked}
            />
          )
        })
      }
      { 
        props.currentTasks.map(item => { 
          return ( 
            <IndividualTask 
              taskName={item} 
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