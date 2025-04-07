'use client';
import React from 'react';
import Image from 'next/image';
import hospitalFinder from '../../../public/hospitalfinder.png';
import { MdOutlineArrowOutward } from 'react-icons/md';

type Project = {
	id: number;
	title: string;
	description: string;
	image: any;
	imagePosition: 'left' | 'right';
	skills: string[];
};

const projectsData: Project[] = [
	{
		id: 1,
		title: 'Hospital Finder',
		description:
			'Website to allow users to find nearest hospital, to find nearest hospital. Website to allow users to find nearest hospital.',
		image: hospitalFinder,
		imagePosition: 'left',
		skills: ['UI/UX', 'Development', 'Maintenance', 'SEO'],
	},
	{
		id: 2,
		title: 'Hospital Finder',
		description:
			'Website to allow users to find nearest hospital, to find nearest hospital. Website to allow users to find nearest hospital.',
		image: hospitalFinder,
		imagePosition: 'right',
		skills: ['UI/UX', 'Development', 'Maintenance', 'SEO'],
	},
	{
		id: 3,
		title: 'Hospital Finder',
		description:
			'Website to allow users to find nearest hospital, to find nearest hospital. Website to allow users to find nearest hospital.',
		image: hospitalFinder,
		imagePosition: 'left',
		skills: ['UI/UX', 'Development', 'Maintenance', 'SEO'],
	},
];

type Props = {};

const Projects = (props: Props) => {
	return (
		<div
			className="flex flex-col px-5 tablet:px-16 py-10 w-full gap-6"
			id="portfolio"
		>
			<div className="w-full flex flex-col gap-4">
				{projectsData.map((project) => (
					<div
						key={project.id}
						className="flex w-full"
					>
						{project.imagePosition === 'left' ? (
							<>
								<div className="w-2/5">
									<Image
										src={project.image}
										width={1005}
										height={500}
										alt={`${project.title} image`}
										className="rounded-l-lg"
									/>
								</div>
								<div className="bg-bg-gray w-2/5 px-4 py-2 flex flex-col gap-4">
									<div className="bg-bg-dark rounded-lg p-1 max-w-fit">
										<MdOutlineArrowOutward
											color="orange"
											size={30}
										/>
									</div>
									<h5>{project.title}</h5>
									<p>{project.description}</p>
									<ul className="list-disc list-inside flex gap-4 text-xs text-orange">
										{project.skills.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
							</>
						) : (
							<>
								<div className="bg-bg-gray w-2/5 px-4 py-2 flex flex-col gap-4">
									<div className="bg-bg-dark rounded-lg p-1 max-w-fit">
										<MdOutlineArrowOutward
											color="orange"
											size={30}
										/>
									</div>
									<h5>{project.title}</h5>
									<p>{project.description}</p>
									<ul className="list-disc list-inside flex gap-4 text-xs text-orange">
										{project.skills.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
								<div className="w-2/5">
									<Image
										src={project.image}
										width={1005}
										height={500}
										alt={`${project.title} image`}
										className="rounded-r-lg"
									/>
								</div>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
