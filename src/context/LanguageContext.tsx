import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      expertise: 'Expertise',
      history: 'History',
      projects: 'Projects',
    },
    main: {
      position: 'AI-Driven App Developer & Full-Stack Engineer',
      bio: "I'm an AI-Driven App Developer with a passion for building scalable, modular systems that leverage the latest in AI and full-stack engineering. Currently studying Wirtschaftsinformatik at IU Leipzig, I specialize in multi-agent workflows, LLM integration, and multi-agent systems using Claude API. My self-hosted homelab on Proxmox with Docker and LXC containers keeps me hands-on with infrastructure. On the full-stack side, I work with Go, React, TypeScript, Node.js, PostgreSQL, and Redis to ship production-ready applications.",
    },
    expertise: {
      title: 'Expertise',
      card1: {
        title: 'Full-Stack Development',
        description: 'I build scalable, modular web applications from the ground up — from responsive React/Svelte frontends to robust Go and Node.js backends. Strong focus on clean architecture, real-time features via WebSockets, and RESTful APIs.',
      },
      card2: {
        title: 'DevOps & Self-Hosted Infrastructure',
        description: 'I run a production-grade homelab on Proxmox with LXC containers and Docker — hosting dashboards, password managers, uptime monitors, and custom apps. I configure reverse proxies with Caddy and manage Linux systems end-to-end.',
      },
      card3: {
        title: 'AI & Multi-Agent Systems',
        description: 'I design and build AI-driven workflows using the Claude API — from simple LLM integrations to complex multi-agent orchestration systems. I focus on task routing, agent specialization, and building reliable, file-based coordination architectures.',
      },
      techStack: 'Tech stack:',
    },
    timeline: {
      title: 'Education & Journey',
      entry1: {
        title: 'AI-Driven App Developer',
        subtitle: 'Self-Employed / Freelance',
        description: 'Building multi-agent AI systems, full-stack web applications, and self-hosted infrastructure. Focus on LLM integration with Claude API, Go backends, and React/Svelte frontends.',
      },
      entry2: {
        title: 'Homelab & Infrastructure Engineering',
        subtitle: 'Personal Project',
        description: 'Built and maintained a self-hosted Proxmox homelab with LXC containers, Docker services, and Caddy reverse proxy — hosting Glance, Vaultwarden, Uptime Kuma, and custom apps.',
      },
      entry3: {
        title: 'First Steps in Full-Stack Development',
        subtitle: 'Exploration & Learning',
        description: 'Deep-dived into Go, React, TypeScript, and PostgreSQL. Built first production-ready web apps with real-time features, REST APIs, and containerized deployments.',
      },
      entry4: {
        title: 'B.Sc. Business Informatics',
        subtitle: 'IU Internationale Hochschule, Leipzig',
        description: 'Studying Business Informatics with focus on software development, system architecture, and digital transformation. Bachelor thesis on low-code platform analysis.',
      },
    },
    projects: {
      title: 'Personal Projects',
      items: [
        {
          title: 'Multi-Agent AI Orchestrator',
          description: 'File-based orchestrator that routes requests to specialized Claude Code agents. Auto-selects agents based on task type using Bash and file architecture.',
        },
        {
          title: 'PlanHub',
          description: 'Modular project management platform with real-time collaboration, task tracking, and WebSocket-based live updates.',
        },
        {
          title: 'Smart Inventory',
          description: 'QR-code-based inventory system for homelab and household items. Progressive Web App with offline support.',
        },
        {
          title: 'Self-Hosted Homelab',
          description: 'Production homelab on Proxmox with LXC containers hosting Glance dashboard, Vaultwarden, Uptime Kuma, and custom apps.',
        },
        {
          title: 'Bachelor Thesis: Low-Code Analysis',
          description: 'Comparative research on low-code platforms vs traditional development. Programmatic document generation pipeline.',
        },
      ],
    },
    footer: {
      text: 'Built by Dennis Scheunert with 💜 | Based on',
      templateLink: 'react-portfolio-template',
    },
  },
  de: {
    nav: {
      expertise: 'Kenntnisse',
      history: 'Werdegang',
      projects: 'Projekte',
    },
    main: {
      position: 'KI-gestützter App-Entwickler & Full-Stack Engineer',
      bio: 'Ich bin ein KI-gestützter App-Entwickler mit Leidenschaft für skalierbare, modulare Systeme, die das Beste aus KI und Full-Stack-Entwicklung vereinen. Aktuell studiere ich Wirtschaftsinformatik an der IU Leipzig und spezialisiere mich auf Multi-Agenten-Workflows, LLM-Integration und Multi-Agenten-Systeme mit der Claude API. Mein selbst-gehostetes Homelab auf Proxmox mit Docker und LXC hält mich nah an der Infrastruktur. Im Full-Stack-Bereich arbeite ich mit Go, React, TypeScript, Node.js, PostgreSQL und Redis.',
    },
    expertise: {
      title: 'Kenntnisse',
      card1: {
        title: 'Full-Stack-Entwicklung',
        description: 'Ich entwickle skalierbare, modulare Webanwendungen von Grund auf — von responsiven React/Svelte-Frontends bis hin zu robusten Go- und Node.js-Backends. Schwerpunkte: saubere Architektur, Echtzeit-Features via WebSockets und RESTful APIs.',
      },
      card2: {
        title: 'DevOps & Self-Hosted Infrastruktur',
        description: 'Ich betreibe ein produktionsnahes Homelab auf Proxmox mit LXC-Containern und Docker — für Dashboards, Passwortmanager, Uptime-Monitoring und eigene Apps. Reverse Proxy mit Caddy, vollständige Linux-Systemverwaltung.',
      },
      card3: {
        title: 'KI & Multi-Agenten-Systeme',
        description: 'Ich entwerfe und baue KI-gestützte Workflows mit der Claude API — von einfachen LLM-Integrationen bis hin zu komplexen Multi-Agenten-Orchestrierungen. Fokus auf Task-Routing, Agenten-Spezialisierung und dateibasierte Koordinationsarchitekturen.',
      },
      techStack: 'Tech-Stack:',
    },
    timeline: {
      title: 'Ausbildung & Werdegang',
      entry1: {
        title: 'KI-gestützter App-Entwickler',
        subtitle: 'Selbstständig / Freelance',
        description: 'Entwicklung von Multi-Agenten-KI-Systemen, Full-Stack-Webanwendungen und selbst-gehosteter Infrastruktur. Schwerpunkt: LLM-Integration mit Claude API, Go-Backends und React/Svelte-Frontends.',
      },
      entry2: {
        title: 'Homelab & Infrastruktur',
        subtitle: 'Persönliches Projekt',
        description: 'Aufbau und Betrieb eines selbst-gehosteten Proxmox-Homelabs mit LXC-Containern, Docker-Diensten und Caddy Reverse Proxy — u.a. Glance, Vaultwarden, Uptime Kuma und eigene Apps.',
      },
      entry3: {
        title: 'Erste Schritte in der Full-Stack-Entwicklung',
        subtitle: 'Selbststudium & Lernen',
        description: 'Intensives Einarbeiten in Go, React, TypeScript und PostgreSQL. Erste produktionsreife Webanwendungen mit Echtzeit-Features, REST APIs und containerisierten Deployments.',
      },
      entry4: {
        title: 'B.Sc. Wirtschaftsinformatik',
        subtitle: 'IU Internationale Hochschule, Leipzig',
        description: 'Studium der Wirtschaftsinformatik mit Fokus auf Softwareentwicklung, Systemarchitektur und digitale Transformation. Bachelorarbeit zur Analyse von Low-Code-Plattformen.',
      },
    },
    projects: {
      title: 'Projekte',
      items: [
        {
          title: 'Multi-Agenten-KI-Orchestrator',
          description: 'Dateibasierter Orchestrator, der Anfragen an spezialisierte Claude Code Agenten weiterleitet. Automatische Agenten-Auswahl nach Aufgabentyp via Bash und Dateiarchitektur.',
        },
        {
          title: 'PlanHub',
          description: 'Modulare Projektmanagement-Plattform mit Echtzeit-Kollaboration, Aufgabenverfolgung und WebSocket-basierten Live-Updates.',
        },
        {
          title: 'Smart Inventory',
          description: 'QR-Code-basiertes Inventarsystem für Homelab und Haushalt. Progressive Web App mit Offline-Unterstützung.',
        },
        {
          title: 'Self-Hosted Homelab',
          description: 'Produktionsnahes Homelab auf Proxmox mit LXC-Containern für Glance-Dashboard, Vaultwarden, Uptime Kuma und eigene Anwendungen.',
        },
        {
          title: 'Bachelorarbeit: Low-Code-Analyse',
          description: 'Vergleichende Untersuchung von Low-Code-Plattformen vs. klassischer Entwicklung. Automatisierte Dokumentgenerierungs-Pipeline.',
        },
      ],
    },
    footer: {
      text: 'Entwickelt von Dennis Scheunert mit 💜 | Basierend auf',
      templateLink: 'react-portfolio-template',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations['en'],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
