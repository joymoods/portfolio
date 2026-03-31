import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilbild from '../assets/images/Profilbild.jpg';
import { useLanguage } from '../context/LanguageContext';
import '../assets/styles/Main.scss';

function Main() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilbild} alt="Dennis Scheunert" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/joymoods" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dennis-scheunert-13523b269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Dennis Scheunert</h1>
          <p>{t.main.position}</p>
          <p className="about-bio">{t.main.bio}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/joymoods" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dennis-scheunert-13523b269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;