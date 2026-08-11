'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

import ProjectCard from '../ui/ProjectCard';
import SectionTitle from '../ui/SectionTitle';
import { projects, type ProjectCategory } from '../../lib/portfolio-data';
import Button from '../ui/Button';

type Filter = 'all' | ProjectCategory;

const filters: {
	label: string;
	value: Filter;
}[] = [
	{
		label: 'All Projects',
		value: 'all',
	},
	{
		label: 'Web Development',
		value: 'web',
	},
	{
		label: 'AWS Projects',
		value: 'aws',
	},
];

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState<Filter>('all');

	const filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter((project) => project.categories.includes(activeFilter));

	const displayedProjects = filteredProjects.slice(0, 3);

	return (
		<section
			id="projects"
			className="section"
		>
			<div className="container">
				{/* Section heading */}
				<SectionTitle
					title="Recent Projects"
					description="A selection of projects I've built to solve problems, create better experiences, and help businesses grow."
				/>

				{/* Filters */}
				<div className="mt-8 flex flex-wrap justify-center gap-2">
					{filters.map((filter) => {
						const isActive = activeFilter === filter.value;

						return (
							<button
								key={filter.value}
								type="button"
								onClick={() => setActiveFilter(filter.value)}
								className={`rounded-lg px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
									isActive
										? 'bg-linear-to-r from-primary to-primary-dark text-white shadow-md'
										: 'border border-border bg-background text-text hover:border-primary hover:text-primary'
								}`}
							>
								{filter.label}
							</button>
						);
					})}
				</div>

				{/* Project Cards */}
				<div className="mt-10 grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
					{displayedProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					))}
				</div>

				{/* Empty state */}
				{displayedProjects.length === 0 && (
					<div className="mt-10 rounded-xl border border-border bg-light-background p-10 text-center">
						<p className="text-text-secondary">
							No projects available in this category yet.
						</p>
					</div>
				)}

				{/* View All */}
				<div className="mt-10 flex justify-center">
					<Button
						variant="primary"
						text="View All Projects"
						href="/projects"
						icon={<FaArrowRight className="text-white text-lg" />}
					/>
				</div>
			</div>
		</section>
	);
};

export default Projects;
