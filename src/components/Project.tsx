import React from "react";
import { useLanguage } from '../context/LanguageContext';
import '../assets/styles/Project.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
}

function ProjectCard({ title, description, tech, gradient, icon }: ProjectCardProps) {
  return (
    <div className="project">
      <div className="project-thumbnail" style={{
        background: gradient,
        width: '100%',
        height: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px 8px 0 0',
        fontSize: '3.5rem',
      }}>
        {icon}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tech-tags">
        {tech.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

const projectMeta = [
  { tech: ["Claude Code", "Bash", "AI Orchestration", "Multi-Agent Systems"], gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", icon: "🤖" },
  { tech: ["Go", "React", "PostgreSQL", "WebSockets", "Docker"], gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)", icon: "📋" },
  { tech: ["Go", "Svelte", "QR Codes", "PWA", "PostgreSQL"], gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", icon: "📦" },
  { tech: ["Proxmox", "LXC", "Docker", "Caddy", "Linux"], gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", icon: "🖥️" },
  { tech: ["Research", "JavaScript", "docx", "Academic Writing"], gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)", icon: "📝" },
];

function Project() {
  const { t } = useLanguage();

  const projects = t.projects.items.map((item, i) => ({ ...item, ...projectMeta[i] }));

  return (
    <div className="projects-container" id="projects">
      <h1>{t.projects.title}</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
