import React from 'react';
import Notes from './components/Notes/Notes';
import Navbar from './components/UI/Navbar.jsx';
import Footer from './components/UI/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Notes></Notes>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
