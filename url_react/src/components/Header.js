import React from "react";

function Header(props) {
  return (
    <header>
      <div
        onClick={() => window.location.reload()}
        style={{ color: "white" }}
        className="logo"
      >
        <span>NG</span>Shrink
      </div>
      {/* <button hr>Get Started</button> */}
      <a href="./cv.pdf">
        Download CV <i class="fas fa-cloud-download-alt"></i>
      </a>
    </header>
  );
}

export default Header;
