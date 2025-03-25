"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import { Card } from './common/styles';
import { services } from '../lib/service-data';

type Props = {};

const Services = () => {
	const router = useRouter();

	return (
		<div
			className="bg-bg-gray py-10 tablet:py-28 px-5 tablet:px-16 flex flex-col gap-12"
			id="services"
		>
			<div className="flex flex-col gap-4 w-full">
				<h6>Services</h6>
				<h1 className="capitalize">What I do</h1>
			</div>
			<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10 w-full [&>*:nth-last-child(-n+2)]:laptop:translate-x-[50%]">
				{services.map((service) => (
					<Card
						key={service.id}
						className="w-full py-5 px-8 flex flex-col gap-5 text-center relative group cursor-pointer"
					>
						{service.icon}
						<div className="flex flex-col gap-3">
							<h3>{service.title}</h3>
							<p>{service.description}</p>
						</div>
						<button
							onClick={() => router.push(`/services/${service.slug}`)}
							className="absolute inset-0 flex items-center justify-center bg-orange text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl text-sm"
						>
							<span className="border border-white rounded-lg py-2 px-4">
								Explore my Work
							</span>
						</button>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Services;
