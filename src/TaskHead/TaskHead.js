import React, { useState, useEffect } from 'react';
import Firebase from 'firebase';
import './TaskHead.scss';

const TaskHead = (props) => {

  useEffect(() => { 
    Firebase.auth()
      .onAuthStateChanged((user) => { 
        if(user) { 
          Firebase.firestore()
          .collection(user.uid)
          .doc('credentials')
          .get()
          .then(data => { 
            setTaskHead(data.data().taskhead)
          });
        }
      })
  },[])
  const taskHeadChange = (e) => { 
    setTaskHead(e.target.value);
    Firebase.firestore()
      .collection(props.uid)
      .doc('credentials')
      .update({ 
        taskhead: e.target.value
      })
  }

  let [taskhead, setTaskHead] = useState('');
  return ( 
      <div id='taskhead'> 
          <input 
            type='text'
            value={taskhead}
            onChange={taskHeadChange}
            autoFocus={true}
          />
      </div>
  )
} 

export default TaskHead;