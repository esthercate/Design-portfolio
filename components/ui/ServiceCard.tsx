import type { ReactNode } from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

type ServiceCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
	features?: string[];
	relatedTypes?: string[];
};

const ServiceCard = ({
	icon,
	title,
	description,
	features,
	relatedTypes,
}: ServiceCardProps) => {
	return (
		<article className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			{/* Icon */}
			<div className="flex h-15 w-15 items-center justify-center rounded-lg bg-primary-soft text-primary">
				{icon}
			</div>

			{/* Content */}
			<div className="flex flex-col gap-2">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>

			{/* Inclusions */}
			{features && features.length > 0 && (
				<div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-4">
					{features.map((feature) => (
						<div
							key={feature}
							className="flex items-center gap-2"
						>
							<FaRegCheckCircle
								className="shrink-0 text-primary"
								size={14}
							/>
							<small>{feature}</small>
						</div>
					))}
				</div>
			)}

			{/* Related website types */}
			{relatedTypes && relatedTypes.length > 0 && (
				<div className="flex flex-col gap-2 border-t border-border pt-4">
					<small>Great for:</small>
					<div className="flex flex-wrap gap-2">
						{relatedTypes.map((type) => (
							<span
								key={type}
								className="rounded-full border border-border bg-light-background px-3 py-1 text-xs font-medium text-text-secondary tablet:text-sm"
							>
								{type}
							</span>
						))}
					</div>
				</div>
			)}
		</article>
	);
};

export default ServiceCard;
