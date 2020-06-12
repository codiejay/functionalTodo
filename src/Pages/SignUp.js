import React, { useState } from 'react';
import firebase from 'firebase';
import { 
  Link, Redirect
} from 'react-router-dom';
import UserInput from '../UserInput/UserInput';


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
  return ( 
    (props.usersignedIn) ? <Redirect to='/login' /> :
    <form id='signForm' onSubmit={formSubmitted}>
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
        <button>SignUp</button>
        <p>
          Own an account already?
          <Link to='./login'>Login here</Link> 
        </p>
    </form>
  )
}

export default SignUp;