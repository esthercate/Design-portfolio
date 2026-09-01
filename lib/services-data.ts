import {
	FaArrowsRotate,
	FaBriefcase,
	FaBullseye,
	FaCalendarCheck,
	FaCartShopping,
	FaChartLine,
	FaCode,
	FaComments,
	FaCreditCard,
	FaDiagramProject,
	FaEnvelopeOpenText,
	FaFileLines,
	FaHandshake,
	FaHeadset,
	FaImages,
	FaLanguage,
	FaLaptopCode,
	FaMagnifyingGlassChart,
	FaMapLocationDot,
	FaMobileScreenButton,
	FaNewspaper,
	FaPenNib,
	FaPenToSquare,
	FaPlug,
	FaPuzzlePiece,
	FaRobot,
	FaRocket,
	FaUsers,
} from 'react-icons/fa6';

// Baseline included in every project, regardless of which service
export const baseInclusions = [
	'Mobile-first, Responsive Design',
	'SEO-Optimized',
	'WhatsApp Integration',
	'Contact Form/Lead Forms',
	'Social Media Integration',
	'Hosting & Domain Setup',
	'Google Analytics & Search Console Setup',
	'3 Months Free Support',
	'Optional monthly maintenance retainer',
];

export const services = [
	{
		icon: FaCode,
		title: 'Website Development',
		description:
			'Custom, modern and responsive websites tailored to your brand, business goals and customers.',
		features: baseInclusions,
	},
	{
		icon: FaArrowsRotate,
		title: 'Website Redesign',
		description:
			'Transform an outdated website into a modern user-friendly experience that better represents your business.',
		features: baseInclusions,
	},
];

export const websiteTypes = [
	{
		icon: FaBriefcase,
		title: 'Business Websites',
		description:
			'Professional websites that build credibility and attract customers.',
	},
	{
		icon: FaImages,
		title: 'Portfolio Websites',
		description: 'Websites that showcase your work, skills, and experience.',
	},
	{
		icon: FaHandshake,
		title: 'Service Websites',
		description:
			'Websites that showcase services and turn visitors into clients.',
	},
	{
		icon: FaBullseye,
		title: 'Landing Pages',
		description:
			'Focused pages built for campaigns, products, and conversions.',
	},
	{
		icon: FaCartShopping,
		title: 'E-commerce Websites',
		description:
			'Online stores with product listings, cart, and checkout — built to sell directly through your site.',
	},
];

// Optional functionality that affects project cost — shown on the
// services page to explain why pricing isn't one-size-fits-all
export const addOns = [
	{ icon: FaCalendarCheck, title: 'Booking & Scheduling' },
	{ icon: FaMobileScreenButton, title: 'Progressive Web App (PWA)' },
	{ icon: FaPenNib, title: 'Copywriting' },
	{ icon: FaCreditCard, title: 'Payment Integration' },
	{ icon: FaMagnifyingGlassChart, title: 'Advanced SEO' },
	{ icon: FaPenToSquare, title: 'CMS Integration' },
	{ icon: FaUsers, title: 'User Accounts' },
	{ icon: FaRobot, title: 'AI Features' },
	{ icon: FaMapLocationDot, title: 'Google Maps Integration' },
	{ icon: FaCartShopping, title: 'E-commerce Functionality' },
	{ icon: FaNewspaper, title: 'Blog / News Section' },
	{ icon: FaEnvelopeOpenText, title: 'Newsletter & Email Marketing' },
	{ icon: FaLanguage, title: 'Multilingual Support' },
	{ icon: FaPlug, title: 'Custom Integrations' },
];

// Factors that shape a project's final price
export const pricingFactors = [
	{
		icon: FaFileLines,
		title: 'Number of Pages',
		description:
			'A single landing page costs less than a full multi-page business website with several sections.',
	},
	{
		icon: FaPuzzlePiece,
		title: 'Functionality & Add-ons',
		description:
			'Extras like booking systems, payments, or custom features add development time and cost.',
	},
	{
		icon: FaDiagramProject,
		title: 'Project Scope',
		description:
			'The overall complexity of what you need — from a simple site to something more custom — shapes the final quote.',
	},
];

// The client journey: contact through to optional ongoing retainer
export const processSteps = [
	{
		icon: FaComments,
		title: 'Contact & Discovery',
		description:
			'You reach out, and we discuss your requirements, goals, and what your website needs to do for your business.',
	},
	{
		icon: FaImages,
		title: 'Content Collection',
		description:
			'You share your content, images, and branding so the site reflects your business accurately from day one.',
	},
	{
		icon: FaLaptopCode,
		title: 'Build',
		description:
			'I design and build your website to spec, keeping you updated as it takes shape.',
	},
	{
		icon: FaRocket,
		title: 'Launch',
		description:
			'Hosting and domain are set up, everything is tested, and your site goes live.',
	},
	{
		icon: FaHeadset,
		title: '3 Months Free Support',
		description:
			'Fixes, content changes, and image swaps included at no extra cost while you settle in.',
	},
	{
		icon: FaHandshake,
		title: 'Optional Retainer',
		description:
			"Once free support ends, I offer ongoing maintenance plans if you'd like to keep working together.",
		optional: true,
	},
];
