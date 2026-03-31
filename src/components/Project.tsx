import React from "react";
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

const projects = [
  {
    title: "Multi-Agent AI Orchestrator",
    description: "File-based orchestrator that routes requests to specialized Claude Code agents. Auto-selects agents based on task type using Bash and file architecture.",
    tech: ["Claude Code", "Bash", "AI Orchestration", "Multi-Agent Systems"],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: "🤖",
  },
  {
    title: "PlanHub",
    description: "Modular project management platform with real-time collaboration, task tracking, and WebSocket-based live updates.",
    tech: ["Go", "React", "PostgreSQL", "WebSockets", "Docker"],
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    icon: "📋",
  },
  {
    title: "Smart Inventory",
    description: "QR-code-based inventory system for homelab and household items. Progressive Web App with offline support.",
    tech: ["Go", "Svelte", "QR Codes", "PWA", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: "📦",
  },
  {
    title: "Self-Hosted Homelab",
    description: "Production homelab on Proxmox with LXC containers hosting Glance dashboard, Vaultwarden, Uptime Kuma, and custom apps.",
    tech: ["Proxmox", "LXC", "Docker", "Caddy", "Linux"],
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: "🖥️",
  },
  {
    title: "Bachelor Thesis: Low-Code Analysis",
    description: "Comparative research on low-code platforms vs traditional development. Programmatic document generation pipeline.",
    tech: ["Research", "JavaScript", "docx", "Academic Writing"],
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    icon: "📝",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
