import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';
import '../assets/styles/Footer.scss'

function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div>
        <a href="https://github.com/joymoods" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/dennis-scheunert-13523b269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>{t.footer.text} <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">{t.footer.templateLink}</a></p>
    </footer>
  );
}

export default Footer;