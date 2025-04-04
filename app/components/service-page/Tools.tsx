import React from 'react';
import { LuDot } from 'react-icons/lu';
import { services } from '../../lib/service-data';

type ToolsProps = {
	serviceId?: number;
};

const Tools = ({ serviceId = 1 }: ToolsProps) => {
	// Find the service data for the specified service ID
	const service = services.find((s) => s.id === serviceId);
	const toolsData = service?.toolsData || [];

	return (
		<div
			className="flex flex-col px-5 tablet:px-16 py-10 gap-16"
			id="technologies"
		>
			<div className="flex flex-col gap-2 w-full justify-center items-center">
				<h2 className="flex justify-center items-center text-white gap-3">
					My Developer Toolkit
				</h2>
				<p className="w-full laptop:w-1/2 text-center italic">
					With the latest technologies at my fingertips, I'll handle the hard
					work for you.
				</p>
			</div>
			<div className="flex flex-col tablet:flex-row justify-center items-center gap-14 tablet:gap-8 w-full">
				{toolsData.map((tool, index) => (
					<div
						key={index}
						className="relative w-full tablet:w-1/4 bg-no-repeat bg-center bg-cover h-72 flex flex-col items-center rounded-t-md"
						style={{ backgroundImage: `url(${tool.image.src})` }}
					>
						<div className="absolute bg-bg-gray/90 w-3/4 top-[-40px] h-full items-center py-1 flex px-4 flex-col gap-6 rounded-t-md">
							<h5 className="text-white">{tool.category}</h5>
							<ul className="text-white space-y-2">
								{tool.technologies.map((tech, index) => (
									<li
										key={index}
										className="flex items-center gap-2 text-white/90 text-sm"
									>
										<LuDot
											color="orange"
											size={20}
										/>
										{tech}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tools;
