import React, { useState } from 'react';
import firebase from 'firebase';
import { 
  Link, Redirect
} from 'react-router-dom';
import './SignUp.scss';


const SignUp = (props) => { 

  let timeError;

  // Add user to firebase database
  const addUser = (id) => { 
    firebase.firestore()
      .collection(id)
      .doc('credentials')
      .set({ 
        fullname: userInput.userfullname,
        useremail: userInput.userEmail,
        useruid: id,
        taskhead: `Your List's Name`,
      })
    props.setUsername(userInput.userfirstName);
    props.signUserIn();
    props.setUserId(id)
  }
  //User submits form
  const formSubmitted = (e) => { 
    e.preventDefault();
    
    if(
      userInput.userfullname &&
      userInput.userPassword
    ) { 
      firebase.auth()
        .createUserWithEmailAndPassword(userInput.userEmail, userInput.userPassword)
        .then((d) => { 
          addUser(d.user.uid)
        })
        .catch(error => { 
          setErrorMessage(errorMessage = error.message);
          seterrorOccured(errorOccured = 'errorMessageShow');
          timeError = setInterval(() => {
            cancelErrorMessage()
          }, 3000);
        })
    }
  }

  const cancelErrorMessage = () => { 
    seterrorOccured(errorOccured  = 'errorMessageHide');
    clearInterval(timeError)
  }

  const userDetailsUpdated = (event) => { 
    let targetName = event.target.name;
    let target = event.target.value;
    switch(targetName) { 
      case 'userfullname': 
        setuserInput({...userInput, userfullname: target });
        break;
      case 'useremail': 
        setuserInput({...userInput, userEmail: target });
        break;
      case 'userpassword': 
        setuserInput({...userInput, userPassword: target });
    }
  } 

  let [userInput, setuserInput] = useState({
    userfullname: '',
    userEmail: '',
    userPassword: ''
  });
  let [errorOccured, seterrorOccured] = useState('errorMessageHide');
  let [errorMessage, setErrorMessage] = useState('');
  return ( 
    (props.usersignedIn) ? <Redirect to='/' /> :
    <div className="signupcontainer">
      <form id='signForm' onSubmit={formSubmitted}>
          <h1 className="heading">you're about <br></br> to  SIGN-UP</h1>
          <input 
            onChange={userDetailsUpdated}
            type="text" 
            placeholder='Your Email'
            name='useremail'
          />
          <input 
            onChange={userDetailsUpdated}
            type="text" 
            placeholder='Your Full Name'
            name='userfullname'
          />
          <input 
            onChange={userDetailsUpdated}
            type="password" 
            placeholder='Your Password'
            name='userpassword'
          />
          <button>Sign-Up</button>
          <p id='loginPromptMobile'>
            Own an account already?
            <Link to='./login'> Login here</Link> 
          </p>
          <div 
            className={errorOccured} 
            style={{
              display: 'block', 
              transition: 'all 2s',
            }}
          >
            <p>{errorMessage}</p>
          </div>
      </form>
      <div id='loginBox'>
        <h1>own an account already?</h1>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

export default SignUp;