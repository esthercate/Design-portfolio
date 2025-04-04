import React from 'react';
import ServicesCard from '../common/ServicesCard';
import { services } from '../../lib/service-data';

type VaServicesProps = {
	serviceId?: number;
};

const VaServices = ({ serviceId = 1 }: VaServicesProps) => {
	// Find the service data for the specified service ID
	const service = services.find((s) => s.id === serviceId);
	const serviceData = service?.servicesData || [];

	// Get the section description based on the service ID
	const getSectionDescription = () => {
		switch (serviceId) {
			case 1: // Web Development
				return 'Im here to keep your website running smoothly and looking great! So that you can focus on growth.';
			case 2: // WordPress Development
				return 'I will create custom themes, plugins, and optimize your WordPress site for performance and security.';
			case 3: // QA Analysis
				return 'Quality assurance is crucial for any digital product. I perform thorough testing to identify and fix issues before they reach your users, ensuring a seamless experience across all devices.';
			default:
				return "I'm here to keep your website running smoothly and looking great! So that you can focus on growth.";
		}
	};

	return (
		<div
			className="flex flex-col px-5 tablet:px-16 py-10 bg-bg-gray"
			id="services"
		>
			<div className="flex flex-col gap-6 justify-center items-center w-full">
				<div className="flex flex-col gap-2 w-full justify-center items-center">
					<h2 className="flex justify-center items-center text-white gap-3">
						What I do best
					</h2>
					<p className="w-full laptop:w-1/2 text-center italic">
						{getSectionDescription()}
					</p>
				</div>
				<div className="flex flex-col gap-4 w-full justify-center items-center">
					{serviceData.length > 0 && (
						<>
							{/* First row - full width card */}
							<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
								<ServicesCard
									icon={serviceData[0].icon}
									title={serviceData[0].title}
								/>
							</div>

							{/* Second row - two cards side by side */}
							{serviceData.length > 2 && (
								<div className="flex flex-col tablet:flex-row gap-4 w-full justify-center items-center">
									<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
										<ServicesCard
											icon={serviceData[1].icon}
											title={serviceData[1].title}
										/>
									</div>
									<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
										<ServicesCard
											icon={serviceData[2].icon}
											title={serviceData[2].title}
										/>
									</div>
								</div>
							)}

							{/* Third row - full width card */}
							{serviceData.length > 3 && (
								<div className="bg-bg-dark p-4 flex flex-col gap-3 justify-center items-center rounded-md w-full tablet:w-64">
									<ServicesCard
										icon={serviceData[3].icon}
										title={serviceData[3].title}
									/>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default VaServices;
