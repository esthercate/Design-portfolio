import type { Metadata } from 'next';
import AllServices from '@/components/servicesPage/AllServices';
import Cta from '@/components/ui/Cta';

export const metadata: Metadata = {
	title: 'Services',
	description:
		'Custom website development and website redesigns for local businesses. Every project includes responsive design, SEO optimization, WhatsApp integration, hosting setup, and more.',
	keywords: [
		'website development services',
		'website redesign Nairobi',
		'custom website Kenya',
		'small business website design',
		'portfolio websites developer',
		'responsive web design services',
		'landing pages development Nairobi',
		'business website development',
		'seo optimized websites',
		'pwa website developer Nairobi',
		'progressive web application developer',
		'cms integration services',
		'website copywriting Nairobi',
	],
};

const ServicesPage = () => {
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
};

export default ServicesPage;
