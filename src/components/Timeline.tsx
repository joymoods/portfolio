import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faServer, faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '../context/LanguageContext';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const { t } = useLanguage();

  return (
    <div id="history">
      <div className="items-container">
        <h1>{t.timeline.title}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2024 – present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.entry1.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.entry1.subtitle}</h4>
            <p>{t.timeline.entry1.description}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 – present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faServer} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.entry2.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.entry2.subtitle}</h4>
            <p>{t.timeline.entry2.description}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.entry3.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.entry3.subtitle}</h4>
            <p>{t.timeline.entry3.description}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">{t.timeline.entry4.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.timeline.entry4.subtitle}</h4>
            <p>{t.timeline.entry4.description}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;