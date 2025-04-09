import { SiSimpleanalytics } from 'react-icons/si';
import { FaWordpressSimple, FaCode } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import { GrVmMaintenance } from 'react-icons/gr';
import { MdOutlineDraw } from 'react-icons/md';
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
		projectsData: [
			{
				id: 1,
				title: 'StartupBlink',
				description:
					'Worked on the development and maintenance of StartupBlink, enhancing functionality, performance, and SEO in collaboration with a cross-functional team.',
				image: '/sblink.png',
				imagePosition: 'left',
				skills: ['Development', 'Maintenance', 'SEO'],
				liveUrl: 'https://www.startupblink.com/',
			},
			{
				id: 2,
				title: 'Personal Portfolio',
				description:
					'Designed and developed this sleek personal portfolio showcasing my projects and skills, to demonstrate real-world application and user-focused design.',
				image: '/portfolio.png',
				imagePosition: 'right',
				skills: ['UI/UX', 'Development', 'Maintenance', 'SEO'],
				liveUrl: '/',
			},
			{
				id: 3,
				title: 'Hospital Finder',
				description:
					'Developed a responsive web app that helps users quickly locate the nearest hospitals, combining intuitive UI/UX with real-time map integration for a seamless experience.',
				image: '/hospitalfinder.png',
				imagePosition: 'left',
				skills: ['UI/UX', 'Development', 'Maintenance', 'SEO'],
				liveUrl: 'https://esthercate.github.io/Hospital-Finder/',
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
		projectsData: [
			{
				id: 1,
				title: 'StartupBlink Blog',
				description:
					'Provided ongoing maintenance and optimization for the StartupBlink Blog, focusing on improving site performance, implementing SEO best practices, and ensuring seamless functionality.',
				image: '/sblink.png',
				imagePosition: 'left',
				skills: ['Maintenance', 'SEO'],
				liveUrl: 'https://www.startupblink.com/blog/',
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
		projectsData: [
			{
				id: 1,
				title: 'StartupBlink',
				description:
					'Conducted UI/UX, API, and manual testing to ensure optimal functionality, performance, and user experience across the StartupBlink platform.',
				image: '/sblink.png',
				imagePosition: 'left',
				skills: ['UI/UX Testing', 'API Testing', 'Manual QA'],
				liveUrl: 'https://www.startupblink.com/',
			},
			{
				id: 2,
				title: 'Personal Portfolio',
				description:
					'Performed UI/UX and manual testing to verify design consistency, responsiveness, and smooth user interactions throughout the portfolio site.',
				image: '/portfolio.png',
				imagePosition: 'right',
				skills: ['UI/UX Testing', 'Manual QA'],
				liveUrl: '/',
			},
		],
	},
];

// For backward compatibility
export const toolsData = services[0].toolsData;
