import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Document } from 'react-pdf';
import DownloadLink from "react-download-link";


function Resume() {
  return (
    <Container className="p-4">
      <h4>Proficiencies</h4>
      <ul>
        <li>
          JavaScript
        </li>
        <li>
          CSS Flexbox | Bulma | Bootstrap
        </li>
        <li>
          MySQL | NoSQL
        </li>
        <li>
          Apollo Graphql | Express | Node.js
        </li>
      </ul>
      <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/13K9nju8Z7sKc9xMvJgZ0Z-BSMNM1jbxC/view?usp=sharing">Download Alexandra Hurst's
        Resume</a>

    </Container >
  );
}

export default Resume;