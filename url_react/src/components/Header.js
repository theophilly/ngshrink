import React from 'react';

function Header(props) {
  return (
    <header>
      <div
        onClick={() => window.location.reload()}
        style={{ color: 'white' }}
        className="logo"
      >
        <span>NG</span>Shrink
      </div>
      {/* <button hr>Get Started</button> 
       <a href="./cv.pdf">
        Download CV <i class="fas fa-cloud-download-alt"></i>
      </a> */}

      <label htmlFor="menu" id="nav-icon">
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </label>
      <input type="checkbox" id="menu" />

      <ul>
        <li>
          <a href="./assets/cv.pdf">Download CV</a>
          <i className="fas fa-arrow-down"></i>
        </li>
        <li>
          <a href="https://myreactprofile.netlify.app/">My Profile</a>{' '}
          <i className="fas fa-user"></i>
        </li>
        <li id="recommend">
          <a href="#">Github</a>
          <i className="fab fa-github"></i>
        </li>
      </ul>
    </header>
  );
}

export default Header;
