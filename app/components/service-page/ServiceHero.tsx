import React from 'react';
import { LinearGradient } from 'react-text-gradients';
import bgImage from '../../../public/office.jpg';

type ServiceHeroProps = {
	title: string;
	description: string;
};

const ServiceHero = ({ title, description }: ServiceHeroProps) => {
	return (
		<div
			className="w-full bg-no-repeat bg-right bg-cover"
			style={{ backgroundImage: `url(${bgImage.src})` }}
		>
			<div className="flex flex-col px-5 justify-center tablet:px-16 py-3 laptop:py-20">
				<div className="flex flex-col w-full justify-between items-center text-center gap-12">
					<div className="w-full laptop:w-1/2">
						<h1 className="text-4xl font-semibold">
							<LinearGradient
								gradient={['to right', '#fe930e , #fdba74, #ffffff']}
							>
								{title}
							</LinearGradient>
						</h1>
						<p className="mt-4 text-gray-700">Virtual Assistant</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceHero;
