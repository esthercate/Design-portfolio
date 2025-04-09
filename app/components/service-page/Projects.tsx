'use client';
import React from 'react';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';

type Project = {
	id: number;
	title: string;
	description: string;
	image: any;
	imagePosition: string;
	skills: string[];
	liveUrl: string;
};

type Props = {
	projectsData: Project[];
};

const Projects = ({ projectsData }: Props) => {
	return (
		<div
			className="flex flex-col px-5 tablet:px-16 py-10 w-full gap-6"
			id="portfolio"
		>
			<div className="flex flex-col gap-2 w-full justify-center items-center">
				<h2 className="flex justify-center items-center text-white gap-3 text-center text-3xl font-bold">
					My Work
				</h2>
				<p className="w-full laptop:w-1/2 text-center italic text-gray-300">
					Explore my projects that demonstrate my expertise in software design,
					development, and maintenance.
				</p>
			</div>
			<div className="w-full flex flex-col items-center gap-4">
				{projectsData.map((project) => (
					<div
						key={project.id}
						className="flex flex-col tablet:flex-row w-full max-w-5xl justify-center"
					>
						{project.imagePosition === 'left' ? (
							<>
								<div className="w-full tablet:w-2/5">
									<Image
										src={project.image}
										width={1005}
										height={500}
										alt={`${project.title} image`}
										className="rounded-t-lg tablet:rounded-l-lg tablet:rounded-tr-none"
									/>
								</div>
								<div className="bg-bg-gray w-full tablet:w-2/5 px-4 py-2 flex flex-col gap-4">
									<Link
										href={project.liveUrl}
										target="_blank"
										className="bg-bg-dark rounded-lg p-1 max-w-fit"
									>
										<MdOutlineArrowOutward
											color="orange"
											size={30}
										/>
									</Link>
									<h5>{project.title}</h5>
									<p className="text-xs">{project.description}</p>
									<ul className="list-disc list-inside flex flex-wrap gap-4 text-xs text-orange">
										{project.skills.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
							</>
						) : (
							<>
								<div className="w-full tablet:w-2/5 order-1 tablet:order-2">
									<Image
										src={project.image}
										width={1005}
										height={500}
										alt={`${project.title} image`}
										className="rounded-t-lg tablet:rounded-r-lg tablet:rounded-tr-none"
									/>
								</div>
								<div className="bg-bg-gray w-full tablet:w-2/5 px-4 py-2 flex flex-col gap-4 order-2 tablet:order-1">
									<Link
										href={project.liveUrl}
										target="_blank"
										className="bg-bg-dark rounded-lg p-1 max-w-fit"
									>
										<MdOutlineArrowOutward
											color="orange"
											size={30}
										/>
									</Link>
									<h5>{project.title}</h5>
									<p className="text-xs">{project.description}</p>
									<ul className="list-disc list-inside flex flex-wrap gap-4 text-xs text-orange">
										{project.skills.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
							</>
						)}
					</div>
				))}
			</div>
			{projectsData.length > 3 && (
				<div className="py-2 px-4 border border-orange hover:bg-orange m-auto rounded-lg flex justify-center items-center mt-3 text-white cursor-pointer text-sm">
					Load More
				</div>
			)}
		</div>
	);
};

export default Projects;
