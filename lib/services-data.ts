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
	FaEnvelopeOpenText,
	FaFileLines,
	FaHandshake,
	FaHeadset,
	FaImages,
	FaLaptopCode,
	FaMobileScreenButton,
	FaNewspaper,
	FaPenNib,
	FaPenToSquare,
	FaPlug,
	FaRocket,
} from 'react-icons/fa6';

// Baseline included in every project, regardless of which service
export const baseInclusions = [
	'Responsive on phones, tablets and computers',
	'Contact form that emails you enquiries',
	'Links to your social media pages',
	'Customers can message you directly on WhatsApp',
	'Google Analytics, so you can see who visits',
	'Google Maps showing customers where to find you',
	'Set up so Google can find you - Search engine Optimized',
	'Domain and hosting for your first year (renewals billed to you)',
	'Business email set up on your domain, e.g. info@yourbusiness.co.ke',
	'3 months free support after launch',
];

// The two packages, separated by how many pages you're building
export const basePricing = {
	title: 'Custom Website',
	scope:
		'A single-page website with up to 8 sections, tailored to your needs. Ideal for businesses, startups, professionals, portfolios, and more',
	price: 'From KSh 20,000',
};

export const addOnsNote =
	'Need something extra? Every project is different. We’ll discuss what you need and provide a custom quote for any additional features or pages.';

export const services = [
	{
		icon: FaCode,
		title: 'Website Development',
		description:
			'A new custom website built around your business, your customers and how you want to be found.',
		features: baseInclusions,
	},
	{
		icon: FaArrowsRotate,
		title: 'Website Redesign',
		description:
			'Turn an outdated website into a modern, mobile-friendly site that makes it easier for customers to understand your business and get in touch.',
		features: baseInclusions,
	},
];

export const websiteTypes = [
	{
		icon: FaBriefcase,
		title: 'Business Websites',
		description:
			'Show customers who you are, what you offer and how to reach you.',
	},
	{
		icon: FaImages,
		title: 'Portfolio Websites',
		description:
			'Show your work, your skills and your experience in one place.',
	},
	{
		icon: FaHandshake,
		title: 'Service Websites',
		description: 'Explain your services and turn visitors into enquiries.',
	},
	{
		icon: FaBullseye,
		title: 'Landing Pages',
		description: 'One focused page built around a single offer or campaign.',
	},
	{
		icon: FaCartShopping,
		title: 'E-commerce Websites',
		description:
			'Sell your products online, with a cart and checkout built into your site.',
	},
];

// Optional functionality that costs extra — priced on a call, not listed here
export const addOns = [
	{ title: 'Extra web pages' },
	{ title: 'Admin dashboard' },
	{ title: 'Blog or news section' },
	{ title: 'Online shop and checkout' },
	{ title: 'Website content writing' },
	{ title: 'Online booking and scheduling' },
	{ title: 'Online payments: M-Pesa or card' },
	{ title: 'Newsletter and email marketing' },
	{ title: 'PWA: Installs like an app on phones' },
	{ title: 'Connecting other tools you already use' },
	{ title: 'CMS integration: Manage your website content yourself' },
	{ title: 'Monthly care plan once your free support ends' },
];
// The client journey: contact through to optional ongoing retainer
export const processSteps = [
	{
		icon: FaComments,
		title: 'Contact & Discovery',
		description:
			'You get in touch and we talk about your business, your customers, and what you want the website to do for you.',
	},
	{
		icon: FaImages,
		title: 'Content Collection',
		description:
			'You send your logo, photos and business details, so the site reflects your business from day one.',
	},
	{
		icon: FaLaptopCode,
		title: 'Build',
		description:
			'I design and build your website, showing you how it looks as it takes shape.',
	},
	{
		icon: FaRocket,
		title: 'Launch',
		description:
			'Your domain is connected, everything is tested, and your website goes live.',
	},
	{
		icon: FaHeadset,
		title: '3 Months Free Support',
		description:
			'Fixes, text changes and photo swaps at no extra cost while you settle in.',
	},
	{
		icon: FaHandshake,
		title: 'Optional Retainer',
		description:
			'When the free support ends, you can move to a monthly plan if you would like me to keep looking after the site.',
		optional: true,
	},
];

export const faqs = [
	{
		question: 'How much will my website cost?',
		answer:
			'A single-page website starts at KSh 20,000. Additional pages and features such as bookings, online payments or content management are priced separately based on what your business needs. You will receive the full price in writing before any work begins.',
	},
	{
		question: 'How long does it take?',
		answer:
			'Most websites are completed and ready to go live within two weeks of receiving the deposit, provided your business information, photos and other content are ready. Larger or more involved websites may take longer, and you will receive a clear timeline before we begin.',
	},
	{
		question: 'Do I pay for the domain and hosting?',
		answer:
			'Your first year of domain and hosting is included in the price. After that, the domain and hosting are renewed annually and billed directly to you by the provider. Everything is registered in your name, so you own your domain and can move your website to another provider whenever you choose.',
	},
	{
		question: 'What do you need from me?',
		answer:
			'I will need your logo, business photos, services and prices, opening hours, contact details and any other information you want customers to see. You will receive a simple checklist when we start, so you know exactly what to provide.',
	},
	{
		question: 'Do you write the content for the website?',
		answer:
			'You can provide the wording yourself, and I will structure and present it professionally on the website. If you would prefer to have the content written for you, website copywriting is available as an add-on.',
	},
	{
		question: 'How do payments work?',
		answer:
			'A 50% deposit is required to book your project and begin work. The remaining 50% is paid before the website goes live. There are no additional charges unless you request work outside the agreed scope.',
	},
	{
		question: 'What happens after my website is live?',
		answer:
			'You receive three months of free support, including fixes, text updates and photo changes. New pages, features or major design changes are quoted separately. After the three months, you can choose a monthly care plan if you would like ongoing support.',
	},
	{
		question: 'Can I update the website myself?',
		answer:
			'Yes. By default, I handle website updates for you, which keeps things simple. If you would prefer to manage your own text and photos, a content management system can be added to your website.',
	},
	{
		question: 'Will my website show up on Google?',
		answer:
			'Your website will be set up with the essentials Google needs to understand and index it, including page titles, descriptions, a sitemap and Search Console setup. Where your website appears in search results depends on factors such as competition, location and how established your site is, so no one can guarantee a top position.',
	},
	{
		question: 'I already have a website. Can you improve it?',
		answer:
			'Yes. I can redesign and improve an existing website rather than starting from scratch. If your current content and information are still useful, this can also make the process faster.',
	},
	{
		question: 'Do you work with businesses outside Nairobi?',
		answer:
			'Yes. Projects can be handled remotely through WhatsApp, email and calls, so you do not need to be based in Nairobi. The entire process, from planning to launch, can be completed online.',
	},
];