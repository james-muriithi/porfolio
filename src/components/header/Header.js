import React, {useState} from "react";
import "./Header.css";
import {Fade} from "react-reveal";
import {greeting, workExperiences, bigProjects} from "../../portfolio";
import DarkModeToggle from "react-dark-mode-toggle";

function Header() {
  const exp = workExperiences.viewExperiences;
  const proj = bigProjects.viewBigProjecst;
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  console.log(isDarkMode);

  return (
    <Fade top duration={1000} distance="20px">
    <div>
      <header className="header" id="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
          
        <ul className="menu">
            <li>
              <span>
                <DarkModeToggle
                  checked={isDarkMode}
                  onChange={setIsDarkMode}
                  size={80}
                  speed={1}
                />
              </span>
            </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          { exp === true &&
            <li>
              <a href="#experience">Experiences</a>
            </li>
          }
          <li>
            <a href="#opensource">Open Source</a>
          </li>
          {proj === true &&
              <li>
                <a href="#projects">Projects</a>
              </li>
          }
          <li>
            <a href="#achievements">Achievements</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </div>
    </Fade>
  );
}
export default Header;
