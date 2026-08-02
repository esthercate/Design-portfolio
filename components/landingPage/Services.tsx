"use client";

import React from 'react';
type Props = {};

const Services = () => {
	return (
		<div
			className="bg-bg-gray py-10 tablet:py-16 px-5 tablet:px-36 flex flex-col gap-12"
			id="services"
		>
			<div className="grid grid-cols-2 gap-4 w-full tablet:flex tablet:flex-row tablet:justify-around">
				<div className="flex flex-col gap-1">
					<h4 className="font-bold text-orange text-lg tablet:text-xl">3+</h4>
					<p className="text-white/50 text-sm">Years of Experience</p>
				</div>
				<div className="flex flex-col gap-1">
					<h4 className="font-bold text-orange text-lg tablet:text-xl">10+</h4>
					<p className="text-white/50 text-sm">Completed Projects</p>
				</div>
				<div className="flex flex-col gap-1">
					<h4 className="font-bold text-orange text-lg tablet:text-xl">12+</h4>
					<p className="text-white/50 text-sm">Technologies Mastered</p>
				</div>
				<div className="flex flex-col gap-1">
					<h4 className="font-bold text-orange text-lg tablet:text-xl">6+</h4>
					<p className="text-white/50 text-sm">Happy Clients</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
