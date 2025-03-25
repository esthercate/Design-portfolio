import React from 'react';
import { services } from '@/app/lib/service-data';
import { notFound } from 'next/navigation';

type ServicePortfolioProps = {
	params: any;
};

const ServicePortfolio = ({ params }: ServicePortfolioProps) => {
	const service = services.find((s) => s.slug === params.slug);
	if (!service) return notFound();

	return (
		<div className="container mx-auto py-16 px-6">
			<h1 className="text-4xl font-bold">{service.title}</h1>
			<p className="mt-4 text-lg">{service.description}</p>
		</div>
	);
};

export default ServicePortfolio;
