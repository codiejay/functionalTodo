import React, { useState } from 'react';
import './App.css';
import Firebase from './firebase';
import firebase from 'firebase';

//Components
import Container from '../src/Container/Container';

const App = () => {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
