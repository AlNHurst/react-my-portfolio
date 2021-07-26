import React from 'react';
import { Link } from "react-router-dom";
import codingQuiz from '../images/coding-quiz.JPG';
import ecommerce from '../images/e-commerce-back-end.JPG';
import fitnessTracker from '../images/fitness-tracker.png';
import livingInMotion from '../images/living-in-motion.jpg';
import trailHound from '../images/trail-hound.PNG';
import weatherApp from '../images/weather-app.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHiking } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">

        {/*  */}
        <div className="portfolio-img-wrapper">
          <div className="row">
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-img-box">
                <Link to="https://western-nc-trail-app.herokuapp.com/"><img src={trailHound} alt="Trail Hound Fullstack Project" className="portfolio-img" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-description-box">
                <h3 className="portfolio-heading">Trail Hound Fullstack Application</h3>
                <p><span><strong>Description: </strong></span>The Trail Hound application is a fullstack application that allows users to find new and exciting hiking trails in North
                  Carolina to plan their next adventure.</p>
                <p><span><strong>Development: </strong></span>HTML/CSS | Mongoose | Node.js/Express | JavaScript | Bootstrap | Insomnia</p>
                <p>Deployed website: <span><FontAwesomeIcon icon={faHiking} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://western-nc-trail-app.herokuapp.com/" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> Trail Hound Full Stack Application</Link></p>

                <p>GitHub Repository: <span><FontAwesomeIcon icon={faGithub} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://github.com/amgaudet/trail-hiking-app" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> GitHub Repository</Link></p>
              </div>
            </div>
          </div>


          {/*  */}
          <div className="row">
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-img-box">
                <Link to="https://jessgreene9.github.io/living-in-motion/"><img src={livingInMotion} alt="Living In Motion Project" className="portfolio-img" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-description-box">
                <h3 className="portfolio-heading">Living In Motion</h3>
                <p><span><strong>Description: </strong></span>The Living in Motion application provide users with the ability to design custom workouts and save
                  each workout to a weekly calendar which is easily accessible.</p>
                <p><span><strong>Development: </strong></span> HTML/CSS | JavaScript | AJAX Lodash | API | Bulma  </p>
                <p>Deployed website: <span><FontAwesomeIcon icon={faDumbbell} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://jessgreene9.github.io/living-in-motion/" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> Living In Motion</Link></p>

                <p>GitHub Repository: <span><FontAwesomeIcon icon={faGithub} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://github.com/jessgreene9/living-in-motion" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> GitHub Repository</Link></p>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="row">
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-img-box">
                <Link to="https://alnhurst.github.io/weather-app/"><img src={weatherApp} alt="Weather Dashboard Project" className="portfolio-img" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-description-box">
                <h3 className="portfolio-heading">API Weather Dashboard</h3>
                <p><span><strong>Description: </strong></span>The Weather Dashboard was developed with features and functionalities to allow users to see the
                  current and 5-day forecast weather for multiple cities.</p>
                <p><span><strong>Development: </strong></span> HTML/CSS | JavaScript | API | AXIOS | Bootstrap </p>
                <p>Deployed website: <span><FontAwesomeIcon icon={faCloudSun} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://alnhurst.github.io/weather-app/" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> API Weather Dashboard</Link></p>

                <p>GitHub Repository: <span><FontAwesomeIcon icon={faGithub} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://github.com/AlNHurst/weather-app" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> GitHub Repository</Link></p>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="row">
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-img-box">
                <Link to="https://vast-woodland-80592.herokuapp.com/"><img src={fitnessTracker} alt="Fitness Tracker Project" className="portfolio-img" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-description-box">
                <h3 className="portfolio-heading">Fitness Tracker Application</h3>
                <p><span><strong>Description: </strong></span>The fitness tracker is an application that allows users to view, create, and track daily workouts. The user can log multiple exercises in a workout, including cardio and resistance training.</p>
                <p><span><strong>Development: </strong></span> HTML/CSS | Mongoose | Node.js/Express | JavaScript | Bootstrap | Insomnia </p>
                <p>Deployed website: <span><FontAwesomeIcon icon={faDumbbell} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://vast-woodland-80592.herokuapp.com/" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> Fitness Tracker</Link></p>

                <p>GitHub Repository: <span><FontAwesomeIcon icon={faGithub} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://github.com/AlNHurst/fitness-tracker" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> GitHub Repository</Link></p>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="row">
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-img-box">
                <Link to="https://github.com/AlNHurst/e-commerce-back-end"><img src={ecommerce} alt="E-Commerce BackEnd Project" className="portfolio-img" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-description-box">
                <h3 className="portfolio-heading">E-Commerce BackEnd</h3>
                <p><span><strong>Description: </strong></span>The e-commerce backend is an application that can be used by retail managers to create, update, and delete data in their database.</p>
                <p><span><strong>Development: </strong></span> Node.js | Sequelizer | Insomnia </p>
                <p>Demonstration: <span><FontAwesomeIcon icon={faShoppingCart} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://github.com/AlNHurst/e-commerce-back-end/blob/main/assets/ecommerce_category_requests.gif" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> E-Commerce BackEnd</Link></p>

                <p>GitHub Repository: <span><FontAwesomeIcon icon={faGithub} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://github.com/AlNHurst/e-commerce-back-end" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> GitHub Repository</Link></p>
              </div>
            </div>
          </div>



          {/*  */}

          <div className="row">
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-img-box">
                <Link to="https://alnhurst.github.io/code_quiz/"><img src={codingQuiz} alt="Coding Quiz Project" className="portfolio-img" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-xm-12">
              <div className="portfolio-description-box">
                <h3 className="portfolio-heading">Coding Quiz</h3>
                <p><span><strong>Description: </strong></span>The Coding Quiz Challenge assesses a user's coding knowledge and render a score based on the amount of time remaining at the end of the quiz..</p>
                <p><span><strong>Development: </strong></span> HTML/CSS | JavaScript | AJAX Lodash </p>
                <p>Deployed website: <span><FontAwesomeIcon icon={faLaptopCode} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://alnhurst.github.io/code_quiz/" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> E-Commerce BackEnd</Link></p>

                <p>GitHub Repository: <span><FontAwesomeIcon icon={faGithub} style={{ color: '#2b6d2bb6' }} /></span>
                  <Link rel="noopener noreferrer" target="_blank" to="https://github.com/AlNHurst/code_quiz" style={{ textDecoration: 'none', color: '#2b6d2bb6' }}> GitHub Repository</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Portfolio;
