
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faMobileAlt, faTasks, faUserClock, faUsersCog } from "@fortawesome/free-solid-svg-icons";
const BestSolution = () => {
  return (
    <div className="field-force-work" style={{ backgroundColor: "rgb(255, 255, 255)", backgroundPosition: "center", backgroundRepeat: "none", height: "auto", paddingTop: "60px", paddingBottom: "150px" }}>
      <div className="field-work-title">
        <h1 className="text-center text-dark" style={{ fontSize: "35px", fontWeight: "500", paddingBottom: "90px" }}>Providing the Best Solution for </h1>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontWeight: "500", fontSize: "1.6rem" }}
            icon={<FontAwesomeIcon icon={faUsersCog} />}
          >
            <h2 className="vertical-timeline-element-title text-center" style={{ fontSize: "1.3rem" }}>Fintech & Insurance </h2>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontWeight: "500", fontSize: "1.6rem" }}
            icon={<FontAwesomeIcon icon={faUserClock} />}
          >
            <h2 className="vertical-timeline-element-title text-center" style={{ fontSize: "1.3rem" }}>Retail & Ecommerce </h2>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"

            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontWeight: "500", fontSize: "3rem" }}
            icon={<FontAwesomeIcon icon={faMobileAlt} />}
          >
            <h2 className="vertical-timeline-element-title text-center" style={{ fontSize: "1.3rem" }}>Travel & Hospitality</h2>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"

            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontWeight: "500", fontSize: "2rem" }}
            icon={<FontAwesomeIcon icon={faLocationArrow} />}
          >
            <h2 className="vertical-timeline-element-title text-center" style={{ fontSize: "1.3rem" }}>Consumer Goods</h2>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"

            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontWeight: "500", fontSize: "2rem" }}
            icon={<FontAwesomeIcon icon={faTasks} />}
          >
            <h2 className="vertical-timeline-element-title text-center" style={{ fontSize: "1.3rem" }}>Education </h2>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>


    </div>
  )
}

export default BestSolution