import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
