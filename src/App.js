import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/aboutme">Alexandra Hurst's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto h5">
              <Nav.Link as={Link} to="/aboutme"><span><i class="fas fa-info-circle"></i></span> About Me</Nav.Link>
              <Nav.Link as={Link} to="/projects"><span><i class="fas fa-laptop-code"></i></span> Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact"><span><i class="fas fa-envelope-open-text"></i></span> Contact</Nav.Link>
              <Nav.Link as={Link} to="/resume"><span><i class="far fa-file"></i></span> Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Main></Main>
      </Container>
      {/* Footer */}
      <div className='footer'>
        <div className="social-links">
          {/* GitHub icon for profile */}
          <a rel="noopener noreferrer" target="_blank"
            href="https://github.com/AlNHurst">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          {/* LinkenIn icon for profile */}
          <a rel="noopener noreferrer" target="_blank"
            href="https://www.linkedin.com/in/alexandra-hurst-28b185130">
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
          {/* Instagram icon for profile */}
          <a rel="noopener noreferrer" target="_blank"
            href="https://www.instagram.com/allicat_nc/">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; 2021 Alexandra Hurst
        </div>
      </div>
    </>
  );
}

export default App;
