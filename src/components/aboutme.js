import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'reactstrap';

function About() {
  return (
    <Container className="p-4">
      <Row>
        <Col xs={6} md={4}>
          <img src="https://res.cloudinary.com/dt3pphznn/image/upload/c_scale,w_200/v1627040018/React-Portfolio/portfolio-img_2_tr5s7w.jpg" alt="Alexandra Hurst" rounded />
        </Col>
        <h1>Learn About Me</h1>
        <p>
          My name is <b>Alexandra Hurst</b>. I am currently a student at UNC
          Charlotte's (UNCC) Web Development Bootcamp. My background prior to enrolling in the web development
          program is in science research and education. I have bachelor degrees in chemistry and psychology and a
          master's degree in chemistry from UNCC. Currently, I am a PhD student in the Nanoscale Science program at
          UNCC. My career goal is to become a full-stack developer and develop web and mobile education
          applications for science and math students.
          Coding languages and skills I have learned include JavaScript, jQuery, CSS Flexbox, AJAX, Bootstrap,
          Bulma, Moments.js, API, React, Node.js, MySQL, NoSQL, and Apollo Graphql.
        </p>
      </Row>
    </Container>
  );
}

export default About;