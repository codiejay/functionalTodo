import React, { useState } from 'react';
import firebase from 'firebase';
import { 
  Link, Redirect
} from 'react-router-dom';
import './SignUp.scss';


const SignUp = (props) => { 

  const addUser = (id) => { 
    firebase.firestore()
      .collection(id)
      .doc('credentials')
      .set({ 
        username: userInput.userfirstName,
        useremail: userInput.userEmail,
        useruid: id,
      })
    props.setUsername(userInput.userfirstName);
    props.signUserIn();
    props.setUserId(id)
  }

  //User submits form
  const formSubmitted = (e) => { 
    e.preventDefault();
    
    if(
      userInput.userEmail, 
      userInput.userLastName,
      userInput.userfirstName,
      userInput.userPassword
    ) { 
      firebase.auth()
        .createUserWithEmailAndPassword(userInput.userEmail, userInput.userPassword)
        .then((d) => { 
          addUser(d.user.uid)
        } )
    }
  }

  const userDetailsUpdated = (event) => { 
    let targetName = event.target.name;
    let target = event.target.value;
    switch(targetName) { 
      case 'username': 
        setuserInput({...userInput, userfirstName: target });
        break;
      case 'userlastname': 
        setuserInput({...userInput, userLastName: target });
        break;
      case 'useremail': 
        setuserInput({...userInput, userEmail: target });
        break;
      case 'userpassword': 
        setuserInput({...userInput, userPassword: target });
    }
  } 

  let [userInput, setuserInput] = useState({
    userfirstName: '',
    userLastName: '',
    userEmail: '',
    userPassword: ''
  });
  let [errorOccured, seterrorOccured] = useState('none')
  return ( 
    (props.usersignedIn) ? <Redirect to='/' /> :
    <div className="signupcontainer">
      <form id='signForm' onSubmit={formSubmitted}>
          <h1 className="heading">you're about to SIGN-UP</h1>
          <input 
            onChange={userDetailsUpdated}
            type="text" 
            placeholder='Your First Name'
            name='username'
          />
          <input 
            onChange={userDetailsUpdated}
            type="text" 
            placeholder='Your Last Name'
            name='userlastname'
          />
          <input 
            onChange={userDetailsUpdated}
            type="text" 
            placeholder='Your Email'
            name='useremail'
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
          <div className="errorMessage" style={{display: `${errorOccured}`, transition: 'all 2s'}}>
            <p>error. please re-check details. <Link to='/login'>please log in</Link></p>
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