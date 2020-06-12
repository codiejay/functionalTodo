import React, { useState } from 'react';
import Container from '../Container/Container';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
  return ( 
    (props.usersignedIn) ? 
    <Container 
      realUserName={props.username}
      userId={props.userId}
    /> 
    : 
    <Redirect to='/login' />
  ) 
}

export default Home;