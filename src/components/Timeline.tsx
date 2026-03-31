import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Journey</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="since 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI-Driven App Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-Employed / Freelance</h4>
            <p>
              Building multi-agent AI systems, full-stack web applications, and self-hosted infrastructure. Focus on LLM integration with Claude API, Go backends, and React/Svelte frontends.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="since 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc. Wirtschaftsinformatik</h3>
            <h4 className="vertical-timeline-element-subtitle">IU Internationale Hochschule, Leipzig</h4>
            <p>
              Studying Business Informatics with focus on software development, system architecture, and digital transformation. Bachelor thesis on low-code platform analysis.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="since 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Homelab & Infrastructure Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
            <p>
              Built and maintained a self-hosted Proxmox homelab with LXC containers, Docker services, and Caddy reverse proxy — hosting Glance, Vaultwarden, Uptime Kuma, and custom apps.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="since 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full-Stack Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Exploration & Learning</h4>
            <p>
              Deep-dived into Go, React, TypeScript, and PostgreSQL. Built first production-ready web apps with real-time features, REST APIs, and containerized deployments.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;