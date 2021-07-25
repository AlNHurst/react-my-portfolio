import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Document } from 'react-pdf'


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
      <li>
        <Link
          to="route"
          onClick={(event) => { event.preventDefault(); window.open("../../public/alexandra-hurst-resume.pdf"); }}>
        Click to download
        </Link>
      </li>
      <li>
      <Document file="public/alexandra-hurst-resume.pdf" />
      </li>
    </Container >
  );
}

export default Resume;