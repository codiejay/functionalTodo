import React, { useState } from 'react';
import firebase from 'firebase';
import { 
  Link,
  Redirect
} from 'react-router-dom';
import './Login.scss'

const Login = (props) => { 

  let timeErrorAppear;
  let [userdetails, setuserdetails] = useState({ 
    username: '',
    userpassword: '',
  });

  let userHasSignedIn = (data) => { 
    let userId = data.user.uid;
    props.loginUser();
    props.getUserId(data.user.uid);
    firebase.firestore()
      .collection(data.user.uid)
      .doc('credentials')
      .get()
      .then( 
        (docs) => { 
          props.setUsername(docs.data().username);
        }
      )
  };  

  let formSubmitted = (event) => { 
    event.preventDefault();

    if(userdetails.username, userdetails.userpassword) { 
      firebase.auth()
        .signInWithEmailAndPassword(userdetails.username, userdetails.userpassword)
          .then( 
            docs => { 
              userHasSignedIn(docs)
            }
          )
          .catch(error => { 
            seterrorMessage(errorMessage = error.message.split('.')[0]);
            setshowloginError(showloginError = 'errorBoxShow');
            timeErrorAppear = setInterval(() => {
              cancelError();
            }, 2000);
          })
    }
  };

  let cancelError = () => { 
    clearInterval(timeErrorAppear);
    setshowloginError(showloginError = 'errorBoxHide');
  }

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

  let [showloginError, setshowloginError] = useState('errorBoxHide');
  let [errorMessage, seterrorMessage] = useState('');
  return ( 
    (props.usersignedIn) ? <Redirect to='/' /> :
    <div className="loginContainer">
      <form id='loginForm' onSubmit={formSubmitted}> 
        <h1 className="heading">you're logging in</h1>
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
        <p id='loginPromptMobile'>
          Don't have an account yet? 
          <Link to='./signup'> Sign Up here</Link> 
        </p>
        <div className={showloginError} style={{transition: 'all 0.3s'}}>
          <p>{errorMessage}.</p>
        </div>
      </form>
      <div className="signupBox">
        <h1>Don't own an accout? </h1>
        <Link to='/signup'>Sign Up.</Link>
      </div>
    </div>
  )
}

export default Login;