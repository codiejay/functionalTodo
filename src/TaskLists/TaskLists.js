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
    if(e.target.id === 'unchecked') { 
      e.target.parentNode.parentNode.setAttribute('style', 'opacity: 0.4');
      console.log(e.target.parentNode.parentNode)
      firebase.firestore()
      .collection(user.uid)
      .where('uniqueId', '==', parseInt(e.target.parentNode.parentNode.dataset.type))
      .get()
      .then(d => { 
        let docId = ' '
        d.forEach(i => { 
          docId = i.id;
        })
        firebase.firestore()
        .collection(user.uid)
        .doc(docId)
        .update({ 
          'done': true,
        })
      })
    }
  };

  const handleUncheckBttnClicked = (e) => { 
    let parentNode = e.target.parentNode;
    if(e.target.id === 'checked') { 
      e.target.parentNode.parentNode.setAttribute('style', 'opacity: 1');
      console.log(e.target.parentNode.parentNode)
      firebase.firestore()
      .collection(user.uid)
      .where('uniqueId', '==', parseInt(e.target.parentNode.parentNode.dataset.type))
      .get()
      .then(d => { 
        let docId = ' '
        d.forEach(i => { 
          docId = i.id;
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
    <div id='taskList'>
      {
        props.storedTasks.map((item, key) => {
          let me = item.done
          return ( 
            <IndividualTask 
              key={key}
              blurtask={me}
              uniqueID={item.uniqueId}
              taskName={item.taskname} 
              checkBttnClicked={handlecheckBttnClicked}
              unCheckBttnClicked={handleUncheckBttnClicked}
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
              checkBttnClicked={handlecheckBttnClicked}
              unCheckBttnClicked={handleUncheckBttnClicked}
              checkBttnId={'regularDoneBttn'}
              containerId={'individualTask'}
            />
          )
        })
      }
    </div>
  )
}

export default TaskLists;