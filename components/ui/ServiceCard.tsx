import type { ReactNode } from 'react';

type ServiceCardProps = {
	icon: ReactNode;
	title: string;
	description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
	return (
		<article className="flex flex-col gap-4 rounded-xl border border-border bg-background p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
			{/* Icon */}
			<div className="flex h-15 w-15 items-center justify-center rounded-lg bg-primary-soft text-primary">
				{icon}
			</div>

			{/* Content */}
			<div className="flex flex-col gap-2">
				<h4>{title}</h4>

				<p>{description}</p>
			</div>
		</article>
	);
};

export default ServiceCard;
