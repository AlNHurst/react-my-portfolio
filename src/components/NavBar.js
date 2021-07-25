import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import About from './aboutMe';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Container>
      <a className="navbar-brand" href="/">Alexandra Hurst's Portfolio</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/aboutMe">About Me <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
      </Container>
    </nav>
  )
}

export default NavBar;
