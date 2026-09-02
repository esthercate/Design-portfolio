import ServiceCard from '../ui/ServiceCard';
import SectionTitle from '../ui/SectionTitle';
import { services, websiteTypes } from '@/lib/services-data';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';

const Services = () => {
	const websiteTypeTitles = websiteTypes.map((type) => type.title);

	return (
		<section
			id="services"
			className="section"
		>
			<div className="container flex flex-col gap-16 items-center">
				<div className="flex flex-col gap-12 items-center w-full">
					<SectionTitle
						title="How I Can Help"
						description="No website yet, or one that's holding you back? Either way, I'll build you something modern that works."
					/>

					<div className="grid w-full gap-6 tablet:grid-cols-1 laptop:grid-cols-2">
						{services.map((service) => {
							const Icon = service.icon;

							return (
								<ServiceCard
									key={service.title}
									icon={<Icon size={24} />}
									title={service.title}
									description={service.description}
									features={service.features}
									relatedTypes={websiteTypeTitles}
								/>
							);
						})}
					</div>
				</div>

				<Button
					variant="primary"
					text="See More Details"
					href="/services"
					icon={<FaArrowRight className="text-white text-lg" />}
				/>
			</div>
		</section>
	);
};

export default Services;
