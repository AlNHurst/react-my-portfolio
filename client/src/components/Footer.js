import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className="social-links">
          {/* GitHub icon for profile */}
          <a rel="noopener noreferrer" target="_blank"
            href="https://github.com/AlNHurst">
            <FontAwesomeIcon icon={faGithub} style={{ color: '#2b6d2bb6', fontSize: '5rem', padding: '16px' }}/>
          </a>
          {/* LinkenIn icon for profile */}
          <a rel="noopener noreferrer" target="_blank"
            href="https://www.linkedin.com/in/alexandra-hurst-28b185130">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#2b6d2bb6', fontSize: '5rem', padding: '16px'  }}/>
          </a>
          {/* Instagram icon for profile */}
          <a rel="noopener noreferrer" target="_blank"
            href="https://www.instagram.com/allicat_nc/">
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#2b6d2bb6', fontSize: '5rem', padding: '16px'  }}/>
          </a>
        </div>
        <div className="footer-copyright">
          &copy; 2021 Alexandra Hurst
        </div>
      </div>
    </div>
  )
}

export default footer
