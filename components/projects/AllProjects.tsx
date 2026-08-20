'use client';

import { useState } from 'react';
import { projectFilters, projects, type ProjectCategory } from '../../lib/portfolio-data';
import ProjectCard from '../ui/ProjectCard';
import FilterButtons from '../ui/FilterButtons';
import SectionTitle from '../ui/SectionTitle';
import PageHero from '../ui/PageHero';

type Filter = 'all' | ProjectCategory;

const AllProjects = () => {
	const [activeFilter, setActiveFilter] = useState<Filter>('all');

	const filteredProjects =
		activeFilter === 'all'
			? projects
			: projects.filter((project) => project.categories.includes(activeFilter));

	return (
		<section className="section mt-8">
			<PageHero
				title="My Work"
				currentPage="Projects"
			/>

			<div className="flex flex-col gap-6 container">
				{/* Filters */}
				<div className="mt-8">
					<FilterButtons
						filters={projectFilters}
						activeFilter={activeFilter}
						onFilterChange={setActiveFilter}
					/>
				</div>

				{/* Projects */}
				<div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							project={project}
						/>
					))}
				</div>

				{/* Empty state */}
				{filteredProjects.length === 0 && (
					<div className="py-10 text-center">
						<p className="text-text-secondary">
							No projects found in this category.
						</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default AllProjects;
