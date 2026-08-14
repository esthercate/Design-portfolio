"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => {
		setIsMenuOpen(false);
  };
  
	return (
		<div>
			{/* Logo */}
			<Link
				href="/"
				onClick={closeMenu}
				className="flex items-center gap-3"
			>
				<Image
					src="/images/logo.png"
					alt="Catherine Vuthi"
					width={48}
					height={48}
					priority
				/>

				<div className="">
					<p className="text-sm font-semibold leading-tight text-text">
						Catherine Vuthi
					</p>

					<span className="text-xs text-text-secondary">
						Web Developer & AWS Enthusiast
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Logo;
