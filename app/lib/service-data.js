import { SiSimpleanalytics } from 'react-icons/si';
import { FaWordpressSimple, FaCode } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import { GrVmMaintenance } from 'react-icons/gr';
import { MdOutlineDraw } from 'react-icons/md';

// Import images for tools
import seoImage from '../../public/se02.jpg';
import backendImage from '../../public/computer.jpg';
import frontendImage from '../../public/frontend.jpg';

export const services = [
	{
		id: 1,
		slug: 'web-development',
		icon: (
			<FaCode
				size={50}
				className="text-orange"
			/>
		),
		title: 'Web Development',
		description:
			"Crafting responsive and visually stunning websites tailored to your brand's unique identity.",
		servicesData: [
			{
				id: 1,
				icon: CgWebsite,
				title: 'Website Development',
				fullWidth: true,
			},
			{
				id: 2,
				icon: GrVmMaintenance,
				title: 'Website Maintenance',
				fullWidth: false,
			},
			{
				id: 3,
				icon: MdOutlineDraw,
				title: 'UI/UX',
				fullWidth: false,
			},
			{
				id: 4,
				icon: SiSimpleanalytics,
				title: 'SEO',
				fullWidth: true,
			},
		],
		toolsData: [
			{
				category: 'Frontend',
				technologies: [
					'HTML',
					'CSS',
					'JavaScript',
					'TypeScript',
					'React',
					'Next.js',
					'Tailwind CSS',
					'Figma',
				],
				image: frontendImage,
			},
			{
				category: 'Backend',
				technologies: [
					'Node.js',
					'Express',
					'MongoDB',
					'MySQL',
					'Python',
					'GraphQL',
				],
				image: backendImage,
			},
			{
				category: 'SEO',
				technologies: [
					'Google Analytics',
					'Google Search Console',
					'SEMrush',
					'Ahrefs',
					'Moz',
					'Keyword Planner',
				],
				image: seoImage,
			},
		],
	},
	{
		id: 2,
		slug: 'wordpress-development',
		icon: (
			<FaWordpressSimple
				size={50}
				className="text-orange"
			/>
		),
		title: 'WordPress Development',
		description:
			'Building and empowering your online presence with professional WordPress development services.',
		servicesData: [
			{
				id: 1,
				icon: MdOutlineDraw,
				title: 'Content Management',
				fullWidth: false,
			},
			{
				id: 2,
				icon: CgWebsite,
				title: 'Website Development',
				fullWidth: true,
			},
			{
				id: 3,
				icon: GrVmMaintenance,
				title: 'Site Management',
				fullWidth: false,
			},
			{
				id: 4,
				icon: SiSimpleanalytics,
				title: 'SEO',
				fullWidth: true,
			},
		],
		toolsData: [
			{
				category: 'Site Design',
				technologies: ['Elementor', 'Gutenberg', 'WP Bakery', 'Divi Builder'],
				image: frontendImage,
			},
			{
				category: 'Site Management',
				technologies: ['Wordfence', 'WP Rocket', 'UpdraftPlus', 'ManageWP'],
				image: backendImage,
			},
			{
				category: 'SEO',
				technologies: ['Yoast SEO', 'Rank Math', 'Google Analytics'],
				image: seoImage,
			},
		],
	},
	{
		id: 3,
		slug: 'quality-assuarance',
		icon: (
			<SiSimpleanalytics
				size={50}
				className="text-orange"
			/>
		),
		title: 'QA Analysis',
		description:
			'Website testing to ensure functionality, performance, and a seamless user experience.',
		servicesData: [
			{
				id: 1,
				icon: MdOutlineDraw,
				title: 'Manual Testing',
				fullWidth: false,
			},
			{
				id: 2,
				icon: CgWebsite,
				title: 'Automated Testing',
				fullWidth: true,
			},
			{
				id: 3,
				icon: GrVmMaintenance,
				title: 'Cross-Browser Testing',
				fullWidth: false,
			},
			{
				id: 4,
				icon: SiSimpleanalytics,
				title: 'Accessibility Checks',
				fullWidth: true,
			},
		],
		toolsData: [
			{
				category: 'UI/UX Testing',
				technologies: [
					'Playwright',
					'Cypress',
					'Wave/axe-core',
					'Cross-browser Testing',
					'Site Responsiveness',
				],
				image: frontendImage,
			},
			{
				category: 'API Testing',
				technologies: [
					'Postman',
					'Swagger',
					'Cypress',
					'Jest',
					'Playwright',
					'Selenium',
				],
				image: backendImage,
			},
			{
				category: 'Performance',
				technologies: ['JMeter', 'TestRail', 'Jira', 'Google Lighthouse'],
				image: seoImage,
			},
		],
	},
];

// For backward compatibility
export const toolsData = services[0].toolsData;
