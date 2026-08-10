import { FaCode } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';
import { FaMagnifyingGlass, FaScrewdriverWrench } from 'react-icons/fa6';
import ServiceCard from '../ui/ServiceCard';
import SectionTitle from '../ui/SectionTitle';

const services = [
	{
		icon: FaCode,
		title: 'Website Development',
		description:
			'Custom, modern and responsive websites tailored to your brand, business goals and customers.',
	},
	{
		icon: FaArrowsRotate,
		title: 'Website Redesign',
		description:
			'Transform an outdated website into a modern user-friendly experience that better represents your business.',
	},
	{
		icon: FaScrewdriverWrench,
		title: 'Website Maintenance',
		description:
			'Keep your website secure, up to date, fast, and running smoothly so you can focus on your business.',
	},
	{
		icon: FaMagnifyingGlass,
		title: 'SEO Optimization',
		description:
			'SEO-friendly websites that make you rank higher on search engines and get found online.',
	},
];

const Services = () => {
	return (
		<section
			id="services"
			className="section"
		>
			<div className="container flex flex-col gap-10">
				<SectionTitle
					title="Services I Offer"
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
			</div>
		</section>
	);
};

export default Services;
