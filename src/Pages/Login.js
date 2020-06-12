import React, { useState } from 'react';
import firebase from 'firebase';
import { 
  Link,
  Redirect
} from 'react-router-dom'

const Login = (props) => { 

  let [userdetails, setuserdetails] = useState({ 
    username: '',
    userpassword: '',
  });

  let userHasSignedIn = (d) => { 
    let userId = d.user.uid;
    props.loginUser();
    props.getUserId(d.user.uid);
    firebase.firestore()
      .collection(d.user.uid)
      .doc('credentials')
      .get()
      .then( 
        (d) => { 
          console.log(d.data())
          props.setUsername(d.data().username);
        }
      )
  };  

  let formSubmitted = (event) => { 
    event.preventDefault();

    if(userdetails.username, userdetails.userpassword) { 
      firebase.auth()
        .signInWithEmailAndPassword(userdetails.username, userdetails.userpassword)
          .then( 
            d => { 
              userHasSignedIn(d)
            }
          )
    }
  };


  let userDeatilsChange = (e) => { 
    let targetElem = e.target.value;
    let targetName = e.target.name;

    switch(targetName) { 
      case 'username': 
        setuserdetails({...userdetails, username: targetElem})
        break;
      case 'password': 
        setuserdetails({...userdetails, userpassword: targetElem})
    }
  } 
  return ( 
    (props.usersignedIn) ? <Redirect to='/' /> :
    <form id='loginForm' onSubmit={formSubmitted}> 
        <input 
          type="text" 
          placeholder='Your Email'
          onChange={userDeatilsChange}
          name='username'
        />
        <input 
          type="password" 
          placeholder='Your Password'
          onChange={userDeatilsChange}
          name='password'
        />

        <button>Login</button>
        <p>
          Don't have an account yet? 
          <Link to='./signup'>Sign Up here</Link> 
        </p>
    </form>
  )
}

export default Login;