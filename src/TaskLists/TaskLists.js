import React, { useState } from 'react';
import './TaskLists.scss';
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
    if(e.target.id === 'regularDoneBttn') { 
      e.target.setAttribute('id', 'undoBttn');
      parentNode.setAttribute('id', 'individualTaskBlur')
      firebase.firestore()
      .collection(user.uid)
      .where('uniqueId', '==', parseInt(e.target.parentNode.dataset.type))
      .get()
      .then(d => { 
        let docId = ' '
        d.forEach(i => { 
          docId = i.id
        })
        firebase.firestore()
        .collection(user.uid)
        .doc(docId)
        .update({ 
          'done': true,
        })
      })
    }
    else { 
      e.target.setAttribute('id', 'regularDoneBttn');
      parentNode.setAttribute('id', 'individualTask')
      firebase.firestore()
      .collection(user.uid)
      .where('uniqueId', '==', parseInt(e.target.parentNode.dataset.type))
      .get()
      .then(d => { 
        let docId = ' '
        d.forEach(i => { 
          docId = i.id
        })
        firebase.firestore()
        .collection(user.uid)
        .doc(docId)
        .update({ 
          'done': false,
        })
      })
    }
  };

  return (
    <ul id='taskList'>
      <h1>TODAY'S TASKS</h1>
      {
        props.storedTasks.map((item, key) => {
          console.log(item)
          return ( 
            <IndividualTask 
              key={key}
              uniqueID={item.uniqueId}
              taskName={item.taskname} 
              delBttnClicked={handledelBttnClicked}
              checkBttnClicked={handlecheckBttnClicked}
              checkBttnId={(item.done ? 'undoBttn' : 'regularDoneBttn' )}
              containerId={(item.done) ? 'individualTaskBlur' : 'individualTask'}
            />
          )
        })
      }
      { 
        props.currentTasks.map((item, key) => { 
          return ( 
            <IndividualTask 
              key={key}
              uniqueID={item.uniqueId}
              taskName={item.userinput} 
              delBttnClicked={handledelBttnClicked}
              checkBttnClicked={handlecheckBttnClicked}
              checkBttnId={'regularDoneBttn'}
              containerId={'individualTask'}
            />
          )
        })
      }
    </ul>
  )
}

export default TaskLists;