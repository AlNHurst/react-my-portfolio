import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

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
            <Link className="nav-link" to="/aboutMe"><FontAwesomeIcon icon={faInfoCircle} style={{ color: '#fff' }}/> About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio"><FontAwesomeIcon icon={faLaptopCode} style={{ color: '#fff' }}/> Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"><FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: '#fff' }}/> Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume"><FontAwesomeIcon icon={faFile} style={{ color: '#fff' }}/> Resume</Link>
          </li>
        </ul>
      </div>
      </Container>
    </nav>
  )
}

export default NavBar;
