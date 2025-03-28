import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { GrVmMaintenance } from 'react-icons/gr';
import { RiSeoLine } from 'react-icons/ri';
import { MdOutlineBrowserUpdated } from 'react-icons/md';
import { LinearGradient } from 'react-text-gradients';

type ServiceHeroProps = {
	title: string;
	description: string;
};

const ServiceHero = ({ title, description }: ServiceHeroProps) => {
	return (
		<div className="flex flex-col px-5 tablet:px-16 py-3 laptop:py-10">
			<div className="flex w-full justify-between items-center gap-10">
				<div className="w-2/5">
					<h1 className="text-4xl font-semibold">
						<LinearGradient
							gradient={['to right', '#fe930e , #fdba74, #ffffff']}
						>
							{title}
						</LinearGradient>
					</h1>
					<p className="mt-4 text-gray-700">Virtual Assistant</p>
				</div>
				<div className="flex flex-col w-1/2 gap-6">
					<h1 className="flex flex-col text-right text-white/60 gap-3">
						My <span>Services</span>
					</h1>
					<div className="grid grid-cols-2">
						<div className="bg-bg-gray px-4 py-6 flex flex-col gap-3">
							<CgWebsite size={30} />
							<h5 className="font-semibold">Website Development</h5>
						</div>
						<div className="bg-white px-4 py-6 flex flex-col gap-3">
							<GrVmMaintenance
								size={30}
								color="orange"
							/>
							<h5 className="text-orange font-semibold">Website Maintenance</h5>
						</div>
						<div className="bg-white px-4 py-6 flex flex-col gap-3">
							<RiSeoLine
								size={30}
								color="orange"
							/>
							<h5 className="text-orange font-semibold">Website Design</h5>
						</div>
						<div className="bg-bg-gray px-4 py-6 flex flex-col gap-3">
							<MdOutlineBrowserUpdated size={30} />
							<h5 className="font-semibold">Content Update</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceHero;
