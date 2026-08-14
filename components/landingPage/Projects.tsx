'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

import ProjectCard from '../ui/ProjectCard';
import SectionTitle from '../ui/SectionTitle';
import {
	projectFilters,
	projects,
	type ProjectCategory,
} from '../../lib/portfolio-data';
import Button from '../ui/Button';
import FilterButtons from '../ui/FilterButtons';

type Filter = 'all' | ProjectCategory;

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
					description="A selection of websites I've designed and built for clients.."
				/>

				{/* Filters */}
				<div className="mt-10">
					<FilterButtons
						filters={projectFilters}
						activeFilter={activeFilter}
						onFilterChange={setActiveFilter}
					/>
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
