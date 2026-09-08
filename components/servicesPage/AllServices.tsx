import PageHero from '../ui/PageHero';
import ProcessTimeline from './ProcessTimeline';
import ServiceSplitPanels from './ServiceSplitPanels';
import WebsiteTypesList from './WebsiteTypesList';
import PricingPackage from './PricingPackage';
import Faq from './Faq';

type Props = {};

const AllServices = (props: Props) => {
	return (
		<section className="section mt-8">
			<PageHero
				title="My Services"
				currentPage="Services"
			/>
			<ServiceSplitPanels />
			<WebsiteTypesList />
			<PricingPackage />
			<ProcessTimeline />
			<Faq />
		</section>
	);
};

export default AllServices;
