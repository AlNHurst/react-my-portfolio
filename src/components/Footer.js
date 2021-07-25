import React from 'react'

const footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default footer
