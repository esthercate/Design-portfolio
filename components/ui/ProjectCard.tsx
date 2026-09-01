import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { Project } from '../../lib/portfolio-data';

type ProjectCardProps = {
	project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<article className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			{/* Project Image */}
			<div className="relative aspect-[16/10] overflow-hidden bg-light-background">
				<Image
					src={project.image}
					alt={project.title}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					loading="eager"
				/>
			</div>

			{/* Content */}
			<div className="flex flex-col gap-3 p-4">
				<div>
					<h3 className="text-base font-semibold text-text">{project.title}</h3>

					<p className="mt-1 text-sm leading-6 text-text-secondary">
						{project.description}
					</p>
				</div>

				{/* Technologies */}
				<div className="flex justify-between">
					<div className="flex flex-wrap gap-2">
						{project.technologies.slice(0, 4).map((technology) => (
							<span
								key={technology}
								className="flex items-center px-2.5 py-1 rounded-full bg-light-background text-xs font-medium text-primary"
							>
								{technology}
							</span>
						))}
					</div>
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View ${project.title}`}
						className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/95 text-text shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
					>
						<FaArrowUpRightFromSquare className="text-xs text-primary" />
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
