import React from 'react';
import { services } from '@/app/lib/service-data';
import { notFound } from 'next/navigation';
import ServiceHero from '../../components/service-page/ServiceHero';

type ServicePortfolioProps = {
	params: any;
};

const ServicePortfolio = ({ params }: ServicePortfolioProps) => {
	const service = services.find((s) => s.slug === params.slug);
	if (!service) return notFound();

	return (
		<div className="pt-6">
			<ServiceHero
				title={service.title}
				description={service.description}
			/>
		</div>
	);
};

export default ServicePortfolio;
