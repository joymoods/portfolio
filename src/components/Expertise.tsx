import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faGolang } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Svelte",
    "TypeScript",
    "Tailwind CSS",
    "Go",
    "Node.js",
    "Java",
    "Jakarta EE",
    "REST APIs",
    "WebSockets",
];

const labelsSecond = [
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "Proxmox",
    "LXC",
    "Caddy",
    "Linux",
    "Git",
];

const labelsThird = [
    "Claude API",
    "Multi-Agent Systems",
    "LLM Integration",
    "AI Orchestration",
    "Prompt Engineering",
    "Claude Code",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Development</h3>
                    <p>I build scalable, modular web applications from the ground up — from responsive React/Svelte frontends to robust Go and Node.js backends. Strong focus on clean architecture, real-time features via WebSockets, and RESTful APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Self-Hosted Infrastructure</h3>
                    <p>I run a production-grade homelab on Proxmox with LXC containers and Docker — hosting dashboards, password managers, uptime monitors, and custom apps. I configure reverse proxies with Caddy and manage Linux systems end-to-end.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGolang} size="3x"/>
                    <h3>AI & Multi-Agent Systems</h3>
                    <p>I design and build AI-driven workflows using the Claude API — from simple LLM integrations to complex multi-agent orchestration systems. I focus on task routing, agent specialization, and building reliable, file-based coordination architectures.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;