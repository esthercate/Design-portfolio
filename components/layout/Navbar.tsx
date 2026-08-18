'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { FaArrowRight, FaBars, FaXmark } from 'react-icons/fa6';
import Logo from '../ui/Logo';
import { navLinks } from './navLinks';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="z-50 w-full py-2 fixed bg-background/95">
			{/* Navbar */}
			<div className="container flex min-h-20 items-center  justify-between">
				{/* Logo */}
				<Logo />

				{/* Desktop Navigation */}
				<div className="hidden items-center gap-3 desktop:gap-8 laptop:flex">
					{navLinks.map((menu) => (
						<Link
							href={menu.link}
							key={menu.title}
							className={`group relative text-xs wide:text-sm font-medium transition-colors duration-300 ${
								menu.title === 'Home'
									? 'text-primary'
									: 'text-text hover:text-primary'
							}`}
						>
							{menu.title}

							{/* Animated underline */}
							<span
								className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
									menu.title === 'Home' ? 'w-full' : 'w-0 group-hover:w-full'
								}`}
							/>
						</Link>
					))}

					{/* Desktop CTA */}
					<Button
						text="Get a free quote"
						href="#contact"
						variant="primary"
						icon={<FaArrowRight />}
					/>
				</div>

				{/* Mobile + Tablet Menu Button */}
				<button
					type="button"
					onClick={() => setIsMenuOpen((prev) => !prev)}
					aria-label={
						isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
					}
					aria-expanded={isMenuOpen}
					className="flex h-10 w-10 items-center justify-center rounded-md text-text transition-colors duration-300 hover:bg-primary-soft hover:text-primary laptop:hidden"
				>
					{isMenuOpen ? (
						<FaXmark className="text-xl" />
					) : (
						<FaBars className="text-xl" />
					)}
				</button>
			</div>

			{/* Mobile + Tablet Menu */}
			<div
				className={`overflow-hidden border-t border-border bg-background px-4 transition-all duration-300 laptop:hidden ${
					isMenuOpen
						? 'max-h-screen opacity-100'
						: 'pointer-events-none max-h-0 opacity-0'
				}`}
			>
				<div className="container-page flex flex-col gap-1 py-5">
					{navLinks.map((menu) => (
						<Link
							href={menu.link}
							key={menu.title}
							onClick={closeMenu}
							className={`rounded-md px-3 py-3 text-sm font-medium transition-colors duration-300 ${
								menu.title === 'Home'
									? 'bg-primary-soft text-primary'
									: 'text-text hover:bg-primary-soft hover:text-primary'
							}`}
						>
							{menu.title}
						</Link>
					))}

					{/* Mobile + Tablet CTA */}
					<div className="mt-3">
						<Button
							text="Get a free quote"
							href="#contact"
							variant="primary"
							icon={<FaArrowRight />}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
