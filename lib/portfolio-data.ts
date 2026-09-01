export type ProjectCategory = 'web' | 'aws';
export type ProjectFilter = 'all' | ProjectCategory;

export type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  categories: ProjectCategory[];
  liveUrl: string;
  githubUrl?: string;
};

export const projectFilters: {
	label: string;
	value: ProjectFilter;
}[] = [
	{
		label: 'All Projects',
		value: 'all',
	},
	{
		label: 'Web Development',
		value: 'web',
	},
	{
		label: 'AWS Projects',
		value: 'aws',
	},
];

export const projects: Project[] = [
	{
		id: 1,
		image: '/images/bibleflow.png',
		title: 'BibleFlow Landing Page',
		description:
			'A modern, responsive landing page built with Next.js and Tailwind CSS for a Bible Study Mobile Tracker application.',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		categories: ['web'],
		liveUrl: 'https://mobile-app-product-page.vercel.app/',
	},
	{
		id: 2,
		image: '/images/mpesa.png',
		title: 'M-Pesa Statement to Excel',
		description:
			'A web application that converts M-Pesa PDF statements into organized Excel spreadsheets for easier expense tracking and management.',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		categories: ['web'],
		liveUrl: 'https://m-pesa-expense-tracker.vercel.app/',
	},
	{
		id: 3,
		image: '/images/pizzacity.png',
		title: 'Slice City Pizza Ordering System',
		description:
			'A responsive pizza ordering system designed to provide a simple and engaging food ordering experience.',
		technologies: ['React', 'JavaScript', 'Tailwind CSS'],
		categories: ['web'],
		liveUrl: 'https://esthercate.github.io/Slice-City/',
	},
	{
		id: 4,
		image: '/images/hospital-finder.png',
		title: 'Hospital Locator Web App',
		description:
			'A location-based web application that helps users find nearby hospitals and access emergency information.',
		technologies: [
			'Next.js',
			'TypeScript',
			'Tailwind CSS',
			'Google Maps API',
			'Emergency Numbers API',
		],
		categories: ['web'],
		liveUrl: 'https://hospital-finder-eta.vercel.app/',
	},
	{
		id: 5,
		image: '/images/portfolioimg.png',
		title: 'Modern Portfolio Website',
		description:
			'A modern portfolio website designed to showcase software engineering experience, projects, and services.',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
		categories: ['web'],
		liveUrl: '/',
	},
	{
		id: 6,
		image: '/images/3-tier-aws.png',
		title: 'Highly Available 3-Tier Architecture',
		description:
			'A highly available 3-tier architecture demonstrating web tier, application tier, and database tier deployment on AWS.',
		technologies: ['AWS', 'VPC', 'EC2', 'RDS'],
		categories: ['aws'],
		liveUrl: 'https://github.com/esthercate/aws-3-tier-architecture',
	},
];