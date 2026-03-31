import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/joymoods" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/dennis-scheunert" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Built by Dennis Scheunert with 💜 | Based on <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">react-portfolio-template</a></p>
    </footer>
  );
}

export default Footer;