import React from 'react';
import { services } from '@/app/lib/service-data';
import { notFound } from 'next/navigation';
import ServiceHero from '../../components/service-page/ServiceHero';
import VaServices from '@/app/components/service-page/VaServices';
import Tools from '@/app/components/service-page/Tools';
import Value from '@/app/components/service-page/Value';
import Projects from '@/app/components/service-page/Projects';

type ServicePortfolioProps = {
	params: any;
};

const ServicePortfolio = ({ params }: ServicePortfolioProps) => {
	const service = services.find((s) => s.slug === params.slug);
	if (!service) return notFound();

	return (
		<div className="">
			<ServiceHero
				title={service.title}
				description={service.description}
			/>
			<VaServices />
			<Tools />
			<Value />
			<Projects />
		</div>
	);
};

export default ServicePortfolio;
