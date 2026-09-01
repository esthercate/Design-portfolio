import AllServices from '@/components/servicesPage/AllServices';
import Cta from '@/components/ui/Cta';

type Props = {}

const ServicesPage = (props: Props) => {
  return (
		<div>
			<AllServices />
			<Cta
				variant="soft"
				title="Ready to get started?"
				description="Tell me about your project and I'll get back to you with next steps and a free quote."
				buttonText="Start the Conversation"
			/>
		</div>
	);
}

export default ServicesPage;