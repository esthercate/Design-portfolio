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
    image: '/mpesa.png',
    title: 'M-Pesa Statement to Excel',
    description:
      'A web application that converts M-Pesa PDF statements into organized Excel spreadsheets for easier expense tracking and management.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'EmailJS',
    ],
    categories: ['web', 'aws'],
    liveUrl: 'https://m-pesa-expense-tracker.vercel.app/',
  },

  {
    id: 2,
    image: '/portfolioimg.png',
    title: 'Modern Portfolio Website',
    description:
      'A modern portfolio website designed to showcase software engineering experience, projects, and services.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'EmailJS',
    ],
    categories: ['web'],
    liveUrl: '/',
  },

  {
    id: 3,
    image: '/hospital-finder.png',
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
    categories: ['web', 'aws'],
    liveUrl: 'https://hospital-finder-eta.vercel.app/',
  },

  {
    id: 4,
    image: '/pizzacity.png',
    title: 'Restaurant Ordering Interface',
    description:
      'A responsive restaurant ordering interface designed to provide a simple and engaging food ordering experience.',
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
    ],
    categories: ['web'],
    liveUrl: 'https://esthercate.github.io/Slice-City/',
  },

  {
    id: 5,
    image: '/sbimg.png',
    title: 'Enterprise Platform Frontend',
    description:
      'A frontend contribution to an enterprise platform built for discovering and connecting with startups around the world.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Python',
    ],
    categories: ['web'],
    liveUrl: 'https://www.startupblink.com/',
  },

  {
    id: 6,
    image: '/huddle.png',
    title: 'Responsive Marketing Landing Page',
    description:
      'A responsive marketing landing page focused on clean layout, responsive design, and a strong visual hierarchy.',
    technologies: [
      'React',
      'Bootstrap',
    ],
    categories: ['web'],
    liveUrl: 'https://esthercate.github.io/huddle-landing-page/',
  },

  {
    id: 7,
    image: '/delani.png',
    title: 'Creative Agency Landing Page',
    description:
      'A creative agency website concept featuring a responsive layout, interactive elements, and a clean visual presentation.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    categories: ['web'],
    liveUrl: 'https://esthercate.github.io/Delani-Studio/',
  },
];