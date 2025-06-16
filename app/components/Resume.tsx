"use client";

import React, { useState } from "react";
import { ResumeCard } from "./common/styles";
import Education from "./common/Education";
import Experience from "./common/Experience";
import ProfessionalSkills from "./common/ProfessionalSkills";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation, MdWork } from "react-icons/md";

type Props = {};

const Resume = (props: Props) => {
  const [activeSection, setActiveSection] = useState("skills");

  const renderContent = () => {
    switch (activeSection) {
      case "skills":
        return <ProfessionalSkills key="skills" />;
      case "education":
        return <Education key="education" />;
      case "experience":
        return <Experience key="experience" />;
      default:
        return null;
    }
  };

  return (
		<div
			className="bg-bg-dark py-10 tablet:py-16 px-5 tablet:px-16 flex flex-col gap-12"
			id="resume"
		>
			<div className="flex flex-col gap-4 w-full text-center">
				<h6>Resume</h6>
				<h2 className="capitalize">Get to Know Me</h2>
			</div>
			<div className="flex flex-col laptop:flex-row">
				<div className="w-full laptop:w-1/4 flex flex-col gap-8">
					<div className="flex laptop:flex-col pb-4 gap-5">
						<ResumeCard
							className={`w-3/4 px-4 py-3 ${
								activeSection === 'skills' ? 'bg-orange' : ''
							}`}
							onClick={() => setActiveSection('skills')}
						>
							<span className="tablet:hidden">
								<GiSkills size={30} />
							</span>
							<span className="hidden tablet:flex">Skills</span>
						</ResumeCard>
						<ResumeCard
							className={`w-3/4 px-4 py-3 ${
								activeSection === 'education' ? 'bg-orange' : ''
							}`}
							onClick={() => setActiveSection('education')}
						>
							<span className="tablet:hidden">
								<MdCastForEducation size={30} />
							</span>
							<span className="hidden tablet:flex">Education</span>
						</ResumeCard>
						<ResumeCard
							className={`w-3/4 px-4 py-3 ${
								activeSection === 'experience' ? 'bg-orange' : ''
							}`}
							onClick={() => setActiveSection('experience')}
						>
							<span className="tablet:hidden">
								<MdWork size={30} />
							</span>
							<span className="hidden tablet:flex">Experience</span>
						</ResumeCard>
					</div>
				</div>
				<div className="w-full tablet:w-3/4">{renderContent()}</div>
			</div>
		</div>
	);
};

export default Resume;
