import PageHero from '../ui/PageHero';
import Pricing from './Pricing';
import ProcessTimeline from './ProcessTimeline';
import ServiceSplitPanels from './ServiceSplitPanels';
import WebsiteTypesList from './WebsiteTypesList';
import Cta from '../ui/Cta';
import Features from './Features';

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
			<Features />
			<Pricing />
			<ProcessTimeline />
		</section>
	);
};

export default AllServices;
