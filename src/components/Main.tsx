import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <div className="avatar-placeholder" style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(-45deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'white',
            letterSpacing: '2px'
          }}>DS</div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/joymoods" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dennis-scheunert-13523b269/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Dennis Scheunert</h1>
          <p>AI-Driven App Developer & Full-Stack Engineer</p>
          <p className="about-bio">
            I'm an AI-Driven App Developer with a passion for building scalable, modular systems that leverage the latest in AI and full-stack engineering.
            Currently studying Wirtschaftsinformatik at IU Leipzig, I specialize in multi-agent workflows, LLM integration, and multi-agent systems using Claude API.
            My self-hosted homelab on Proxmox with Docker and LXC containers keeps me hands-on with infrastructure.
            On the full-stack side, I work with Go, React, TypeScript, Node.js, PostgreSQL, and Redis to ship production-ready applications.
          </p>

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