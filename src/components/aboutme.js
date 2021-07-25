import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-xm-12">
            <div className="photo-wrap">
            <img className="profile-img" src="https://res.cloudinary.com/dt3pphznn/image/upload/v1627040018/React-Portfolio/portfolio-img_2_tr5s7w.jpg" alt="Alexandra Hurst" />
            </div>
          </div>
          <div className="col-lg-9 col-xm-12">
            <h1 className="about-heading">Learn About Me</h1>
            <p className="about-paragraph">My name is <b>Alexandra Hurst</b>. I am currently a student at UNC
            Charlotte's (UNCC) Web Development Bootcamp. My background prior to enrolling in the web development
            program is in science research and education. I have bachelor degrees in chemistry and psychology and a
            master's degree in chemistry from UNCC. Currently, I am a PhD student in the Nanoscale Science program at
            UNCC. My career goal is to become a full-stack developer and develop web and mobile education
            applications for science and math students.
            Coding languages and skills I have learned include JavaScript, jQuery, CSS Flexbox, AJAX, Bootstrap,
            Bulma, Moments.js, API, React, Node.js, MySQL, NoSQL, and Apollo Graphql.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;