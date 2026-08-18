import ServiceCard from '../ui/ServiceCard';
import SectionTitle from '../ui/SectionTitle';
import { services, websiteTypes } from '@/lib/services-data';
import { FaArrowRight, FaRegCheckSquare } from 'react-icons/fa';
import Button from '../ui/Button';

const Services = () => {
	return (
		<section
			id="services"
			className="section"
		>
			<div className="container flex flex-col gap-12 items-center">
				<SectionTitle
					title="What I Do"
					description="Everything you need to establish a strong online presence."
				/>
				<div className="grid gap-4 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
					{services.map((service) => {
						const Icon = service.icon;

						return (
							<ServiceCard
								key={service.title}
								icon={<Icon size={24} />}
								title={service.title}
								description={service.description}
							/>
						);
					})}
				</div>
				<div className="flex flex-col gap-6">
					<h3 className="text-center">Website Types</h3>
					<div className="grid gap-4 tablet:grid-cols-3 laptop:grid-cols-4">
						{websiteTypes.map((website) => {
							return (
								<div
									key={website.title}
									className="flex gap-3"
								>
									<FaRegCheckSquare
										size={25}
										className="text-primary"
									/>
									<div>
										<h6>{website.title}</h6>
										<small>{website.description}</small>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<Button
					variant="primary"
					text="Learn More"
					href="/services"
					icon={<FaArrowRight className="text-white text-lg" />}
				/>
			</div>
		</section>
	);
};

export default Services;
