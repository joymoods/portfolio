import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faGolang } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { useLanguage } from '../context/LanguageContext';
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
    const { t } = useLanguage();

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t.expertise.title}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>{t.expertise.card1.title}</h3>
                    <p>{t.expertise.card1.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.techStack}</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>{t.expertise.card2.title}</h3>
                    <p>{t.expertise.card2.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.techStack}</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGolang} size="3x"/>
                    <h3>{t.expertise.card3.title}</h3>
                    <p>{t.expertise.card3.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.techStack}</span>
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