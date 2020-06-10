import React, {useState, useContext} from "react";
import "./Header.css";
import {Fade} from "react-reveal";
import {greeting, workExperiences, bigProjects} from "../../portfolio";
import Toggle from "../toggle/Toggle";
import Context from "../../containers/theme/Context";
import sun from '../../assets/images/sun.png';
import moon from '../../assets/images/moon.png';

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
            <Toggle
              icons={{
                checked: (
                  <img
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />
                ),
                unchecked: (
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: 'none' }}
                  />
                ),
              }}
              checked={state.isDark}
              onChange={e =>
                setIsDarkMode()
              }
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
