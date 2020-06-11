import React, {useState, useContext} from "react";
import "./Header.css";
import {Fade} from "react-reveal";
import {greeting, workExperiences, bigProjects} from "../../portfolio";
import DarkModeToggle from "react-dark-mode-toggle";
import Context from "../../containers/theme/Context";

function Header() {
  const exp = workExperiences.viewExperiences;
  const proj = bigProjects.viewBigProjecst;

  const { state, dispatch } = useContext(Context);

  const setIsDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <Fade top duration={1000} distance="20px">
    <div>
      <header className="header" id="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <div className="fr">
          <input className="menu-btn" type="checkbox" id="menu-btn" />         
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

          <span className="toggle">
              <DarkModeToggle
                speed={2}
                checked={state.isDark}
                onChange={setIsDarkMode}
                size={60}
              />
          </span>
          
        <ul className="menu">
            <li>
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

        </div>
      </header>
    </div>
    </Fade>
  );
}
export default Header;
