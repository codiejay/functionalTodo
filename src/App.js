import React, { useState } from 'react';
import './App.css';
import Firebase from './firebase';
import firebase from 'firebase';
import { 
  BrowserRouter, 
  Route,
} from 'react-router-dom'

//Components
import Home from '../src/Pages/Home';
import Login from '../src/Pages/Login';
import Signup from '../src/Pages/SignUp';


const App = () => {
  let [userSignedInState, setuserSignedInState] = useState(false);
  let [userfirstname, setuserfirstname] = useState('');
  let [userId, setUserId] = useState('');

  const setUsername = (name) => { 
    setuserfirstname(userfirstname = name)
  }

  const signUserIn = () => { 
    setuserSignedInState(userSignedInState = true);
  }

  const getUserId = (id) => { 
    setUserId(userId = id);
  }

  firebase.auth().onAuthStateChanged((user) => { 
    if(user) { 
      setuserSignedInState(userSignedInState = true);
      setUserId(userId = user.uid);
      firebase.firestore()
      .collection(user.uid)
      .doc('credentials')
      .get()
      .then(d => {
        setuserfirstname(userfirstname = d.data().username)
      });
    }
  });

  const signoutUser = () => { 
    firebase.auth().signOut().then(() => { 
      setuserSignedInState(userSignedInState = false);
      
    })
  }

  return (
    <BrowserRouter>
      <Route exact path='/'> 
         <div className='App'>
            <Home 
              usersignedIn= {userSignedInState}
              username={userfirstname}
              userId={userId}
              signoutUser={signoutUser}
            />
         </div>
      </Route>
      <Route path='/login'>
        <Login 
          usersignedIn= {userSignedInState}
          loginUser={signUserIn}
          getUserId={getUserId}
          setUsername={setUsername}
        />
      </Route>
      <Route path='/signup'>
        <Signup 
          usersignedIn= {userSignedInState}
          setUsername={setUsername}
          signUserIn={signUserIn}
          setUserId={getUserId}
        />
      </Route>
    </BrowserRouter>
  );
}

export default App;