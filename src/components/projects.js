import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

function Projects() {
  // constructor(props)
  // super(props);
  return (
    <div className="projects-grid">
      {/* Project # 1 Card */}
      <Card shadow={5} style={{ width: '800px', margin: 'auto' }}>
        <CardTitle expand style={{ height: '400px', background: 'url(https://res.cloudinary.com/dt3pphznn/image/upload/c_scale,w_800/v1627040082/React-Portfolio/trail-hound-home_beqmac.png) no-repeat' }}></CardTitle>
        <CardText>
          <b>Title: </b>Trail Hound Fullstack Application
          <b>Description: </b>The Trail Hound application is a fullstack application that allows users to find new and exciting hiking trails in North Carolina to plan their next adventure.
          <br></br>
          <b>Technologies: </b><br></br>
          HTML/CSS | JavaScript | Handlebars | Express | Bulma | MySQL | Cloudinary
          <br></br>
          <a
            rel="noopener noreferrer" target="_blank" href="https://western-nc-trail-app.herokuapp.com/"><i class="fas fa-hiking" aria-current="true"></i> Trail Hound Deployed Website
          </a>
          <br></br>
          <a
            rel="noopener noreferrer" target="_blank" href="https://github.com/amgaudet/trail-hiking-app"><i class="fa fa-github" aria-current="true"></i> GitHub
            Repository
          </a>
        </CardText>
        <CardActions>
          <Button colored>GitHub</Button>
          <Button colored>Deployed Website</Button>
          <Button colored>Demo</Button>
        </CardActions>
      </Card>

      {/* Project # 2 Card */}
      <Card shadow={0} style={{ width: '800px', height: '650px', margin: 'auto' }}>
        <CardTitle expand style={{ background: 'url(https://res.cloudinary.com/dt3pphznn/image/upload/c_scale,w_800/v1627042866/React-Portfolio/fitness-tracker_nb9cpd.png) no-repeat' }}></CardTitle>
        <CardText style={{ fontSize: '20px' }}>
          <b>Title: </b>Fitness Tracker Mongoose Application
          <b>Description:</b>The fitness tracker is an application that allows users to view, create, and track daily workouts. The user can log multiple exercises in a workout, including cardio and resistance training.
          <br></br>
          <b>Technologies: </b><br></br>
          HTML/CSS | Mongoose | Node.js/Express | JavaScript | Bootstrap | Insomnia
        </CardText>
        <br></br>
        <a
          rel="noopener noreferrer" target="_blank" href="https://vast-woodland-80592.herokuapp.com/"><i class="fas fa-cloud-sun" aria-current="true"></i> Coding Quiz
          Deployed Website
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/fitness-tracker"><i class="fa fa-github" aria-current="true"></i> GitHub
          Repository
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/fitness-tracker/blob/main/public/images/fitness-tracker.gif"><i class="fa fa-camera-retro" aria-current="true"></i> Demo
        </a>
      </Card>

      <Card shadow={0} style={{ width: '800px', height: '650px', margin: 'auto' }}>
        <CardTitle expand style={{ background: 'url(https://res.cloudinary.com/dt3pphznn/image/upload/c_scale,h_350,w_800/v1627043303/React-Portfolio/e-commerce-back-end_ptlloa.jpg) no-repeat' }}></CardTitle>
        <CardText style={{ fontSize: '20px' }}>
          <b>Title: </b>E-Commerce Back-End Node.JS
          <br></br>
          <b>Description:</b>The e-commerce backend is an application that can be used by retail managers to create, update, and delete data in their database.
          <br></br>
          <b>Technologies: </b><br></br>
          Node.js | Sequelizer | Insomnia
        </CardText>
        <br></br>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/e-commerce-back-end"><i class="fa fa-github" aria-current="true"></i> GitHub
          Repository
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/e-commerce-back-end/blob/main/assets/ecommerce_category_requests.gif"><i class="fa fa-camera-retro" aria-current="true"></i> Demo
        </a>
      </Card>

      <Card shadow={0} style={{ width: '800px', height: '650px', margin: 'auto' }}>
        <CardTitle expand style={{ background: 'url(https://res.cloudinary.com/dt3pphznn/image/upload/c_scale,w_800/v1627040082/React-Portfolio/living-in-motion-home_y3teiw.png) no-repeat' }}></CardTitle>
        <CardText style={{ fontSize: '20px' }}>
          <b>Title: </b>Living Motion API Application
          <b>Description:</b>The Living in Motion application provide users with the ability to design custom workouts and save
          each workout to a weekly calendar which is easily accessible.
          <br></br>
          <b>Technologies: </b><br></br>
          HTML/CSS | JavaScript | AJAX Lodash | API | Bulma |
        </CardText>
        <br></br>
        <a
          rel="noopener noreferrer" target="_blank" href="https://jessgreene9.github.io/living-in-motion/"><i class="fa fa-dumbbell" aria-current="true"></i> Living In Motion Deployed Website
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/jessgreene9/living-in-motion"><i class="fa fa-github" aria-current="true"></i> GitHub
          Repository
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/jessgreene9/living-in-motion/blob/main/assets/images/LivingInMotion%20Animation.gif"><i class="fa fa-camera-retro" aria-current="true"></i> Demo
        </a>
      </Card>

      <Card shadow={0} style={{ width: '800px', height: '650px', margin: 'auto' }}>
        <CardTitle expand style={{ background: 'url(https://res.cloudinary.com/dt3pphznn/image/upload/c_scale,w_800/v1627042023/React-Portfolio/weather-app_yv88so.jpg) no-repeat' }}></CardTitle>
        <CardText style={{ fontSize: '20px' }}>
          <b>Title: </b>Weather Dashboard API Application
          <b>Description:</b>The Weather Dashboard was developed with features and functionalities to allow users to see the
          current and 5-day forecast weather for multiple cities.
          <br></br>
          <b>Technologies: </b><br></br>
          HTML/CSS | JavaScript | API | AXIOS | Bootstrap
        </CardText>
        <br></br>
        <a
          rel="noopener noreferrer" target="_blank" href="https://alnhurst.github.io/weather-app/"><i class="fas fa-cloud-sun" aria-current="true"></i> Weather
          Dashboard Deployed Website
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/weather-app"><i class="fa fa-github" aria-current="true"></i> GitHub
          Repository
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/weather-app/blob/main/Demo/weather-dashboard.gif"><i class="fa fa-camera-retro" aria-current="true"></i> Demo
        </a>
      </Card>

      <Card shadow={0} style={{ width: '800px', height: '650px', margin: 'auto' }}>
        <CardTitle expand style={{ background: 'url(https://res.cloudinary.com/dt3pphznn/image/upload/c_scale,w_800/v1627042327/React-Portfolio/coding-quiz_krgue0.jpg) no-repeat' }}></CardTitle>
        <CardText style={{ fontSize: '20px' }}>
          <b>Title: </b>The Coding Quiz JavaScript Application
          <b>Description:</b>The Coding Quiz Challenge assesses a user's coding knowledge and render a score based on the
          amount of time remaining at the end of the quiz.
          <br></br>
          <b>Technologies: </b><br></br>
          HTML/CSS | JavaScript | AJAX Lodash
        </CardText>
        <br></br>
        <a
          rel="noopener noreferrer" target="_blank" href="https://alnhurst.github.io/code_quiz/"><i class="fas fa-cloud-sun" aria-current="true"></i> Coding Quiz
          Deployed Website
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/code_quiz"><i class="fa fa-github" aria-current="true"></i> GitHub
          Repository
        </a>
        <a
          rel="noopener noreferrer" target="_blank" href="https://github.com/AlNHurst/code_quiz/blob/main/Demo/coding_quiz.gif"><i class="fa fa-camera-retro" aria-current="true"></i> Demo
        </a>
      </Card>

    </div>
  );
}

export default Projects;