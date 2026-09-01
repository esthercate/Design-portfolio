import { FaRegCheckCircle, FaRegHeart } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import {
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

export const aboutPhoto = {
	src: '/images/about-img.jpeg',
	alt: 'Photo of Catherine',
};

export const resumeLink = '/resume.pdf';

export const highlights = [
	{ icon: FaRegCheckCircle, label: 'Clean & Modern Design' },
	{ icon: GiProgression, label: 'Performance Focused' },
	{ icon: FaRegHeart, label: 'Client Success Driven' },
];

export const techStack = [
	{ icon: SiReact, name: 'React' },
	{ icon: SiNextdotjs, name: 'Next.js' },
	{icon: SiJavascript, name: "JavaScript"},
	{ icon: SiTypescript, name: 'TypeScript' },
	{ icon: SiTailwindcss, name: 'Tailwind CSS' },
];