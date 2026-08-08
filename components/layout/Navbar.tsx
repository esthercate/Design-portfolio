'use client';

import Link from 'next/link';
import Button from '../ui/Button';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';

const navLinks = [
	{
		title: 'Home',
		link: '/',
	},
	{
		title: 'Services',
		link: '#services',
	},
	{
		title: 'About',
		link: '#about',
	},
	{
		title: 'Projects',
		link: '#projects',
	},
	{
		title: 'Testimonials',
		link: '#testimonials',
	},
	{
		title: 'Contact',
		link: '#contact',
	},
];

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between py-4">
			{/* Logo */}
			<Link
				href="/"
				className="flex items-center gap-3"
			>
				<Image
					src="/logo.png"
					alt="logo"
					width={50}
					height={50}
				/>
				<div className="flex flex-col items-start ">
					<h3 className="text-text">Catherine Vuthi</h3>
					<small>Web Developer & AWS Enthusiast</small>
				</div>
			</Link>

			{/* Navigation */}
			<div className="hidden items-center gap-8 laptop:flex">
				{navLinks.map((menu) => (
					<Link
						href={menu.link}
						key={menu.title}
						className={`group relative font-medium text-sm transition-colors duration-300 ${
							menu.title === 'Home'
								? 'text-primary'
								: 'text-text hover:text-primary'
						}`}
					>
						{menu.title}

						{/* Animated underline */}
						<span
							className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
								menu.title === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'
							}`}
						/>
					</Link>
				))}
				{/* CTA */}
				<Button
					text="Get a free quote"
					href="#contact"
					variant="primary"
					icon={<FaArrowRight />}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
