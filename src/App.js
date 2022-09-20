import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Notes from './components/Notes';

function App() {
  return (
    <div>
      <NavBar />
      <Notes />
    </div>
  );
}

export default App;
