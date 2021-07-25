import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main';
import { Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <NavBar/>
        <Main/>
      <Footer/>
    </>
  );
}

export default App;
