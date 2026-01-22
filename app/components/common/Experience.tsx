import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCode, FaReact, FaCodeBranch } from "react-icons/fa";

type Props = {};

const Experience = (props: Props) => {
  return (
		<div className="flex flex-col gap-4">
			<div>
				<h3>My Experience</h3>
			</div>
			<VerticalTimeline layout="1-column-left">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#1b1b1c', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid #1b1b1c' }}
					date="Jun 2025 - Present"
					iconStyle={{ background: '#fe930e', color: '#fff' }}
					icon={<FaReact />}
					visible={true}
				>
					<h4 className="vertical-timeline-element-title text-white">
						Frontend Developer | React and Next.js
					</h4>
					<h5 className="vertical-timeline-element-subtitle">- Kenya, Nairobi</h5>
					<p>Independent Contractor</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#1b1b1c', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid #1b1b1c' }}
					date="Jan 2024 - Apr 2025"
					iconStyle={{ background: '#fe930e', color: '#fff' }}
					icon={<FaCodeBranch />}
					visible={true}
				>
					<h4 className="vertical-timeline-element-title text-white">
						Mid-Level Software Engineer
					</h4>
					<h5 className="vertical-timeline-element-subtitle">- Remote</h5>
					<p>StartupBlink - Haifa, Israel</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: '#1b1b1c', color: '#fff' }}
					contentArrowStyle={{ borderRight: '7px solid #1b1b1c' }}
					date="Oct 2022 - Dec 2023"
					iconStyle={{ background: '#fe930e', color: '#fff' }}
					icon={<FaCode />}
					visible={true}
				>
					<h4 className="vertical-timeline-element-title">
						Junior Software Engineer
					</h4>
					<h5 className="vertical-timeline-element-subtitle">- Remote</h5>
					<p>StartupBlink - Haifa, Israel</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Experience;
