"use client";

import React, { useCallback } from 'react';
import { PortfolioCard } from './common/styles';
import {
	MdWeb,
	MdArrowForward,
	MdArrowBack,
	MdArrowForward as MdNext,
} from 'react-icons/md';
import Link from 'next/link';
import { projects } from '../lib/portfolio-data';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type Props = {};

const Portfolio = (props: Props) => {
	const autoplayOptions = {
		delay: 4000,
		stopOnInteraction: false,
		rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
	};

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			slidesToScroll: 1,
		},
		[Autoplay(autoplayOptions)]
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div
			className="bg-bg-gray py-10 tablet:py-16 px-5 tablet:px-16 flex flex-col gap-12"
			id="portfolio"
		>
			<div className="flex flex-col gap-4 w-full text-center">
				<h6 className="text-orange">Portfolio</h6>
				<h2 className="capitalize text-3xl font-bold">My Recent Work</h2>
			</div>

			{/* Mobile View - Column Layout */}
			<div className="flex flex-col gap-6 tablet:hidden">
				{projects.map(({ image, title, technologies, liveUrl, id }) => (
					<Link
						href={liveUrl}
						target="_blank"
						className="group block"
						key={id}
					>
						<PortfolioCard className="w-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
							<div className="relative overflow-hidden rounded-t-lg">
								<img
									src={image}
									className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
									alt={title}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
									<div className="flex flex-wrap gap-2 justify-center">
										{technologies.map((technology, index) => (
											<span
												className="bg-bg-dark/95 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium"
												key={index}
											>
												{technology}
											</span>
										))}
									</div>
								</div>
							</div>
							<div className="p-4 flex flex-col gap-3">
								<div className="flex justify-between items-center">
									<p className="text-lg font-semibold group-hover:text-orange transition-colors">
										{title}
									</p>
								</div>
							</div>
						</PortfolioCard>
					</Link>
				))}
			</div>

			{/* Tablet/Desktop View - Carousel */}
			<div className="hidden tablet:block relative">
				<div
					className="overflow-hidden py-6"
					ref={emblaRef}
				>
					<div className="flex">
						{projects.map(({ image, title, technologies, liveUrl, id }) => (
							<div
								className="flex-[0_0_33.33%] min-w-0 px-2"
								key={id}
							>
								<Link
									href={liveUrl}
									target="_blank"
									className="group block"
								>
									<PortfolioCard className="w-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
										<div className="relative overflow-hidden rounded-t-lg">
											<img
												src={image}
												className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
												alt={title}
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											<div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
												<div className="flex flex-wrap gap-2 justify-center">
													{technologies.map((technology, index) => (
														<span
															className="bg-bg-dark/95 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium"
															key={index}
														>
															{technology}
														</span>
													))}
												</div>
											</div>
										</div>
										<div className="p-4 flex flex-col gap-3">
											<div className="flex justify-between items-center">
												<p className="text-lg font-semibold group-hover:text-orange transition-colors">
													{title}
												</p>
											</div>
										</div>
									</PortfolioCard>
								</Link>
							</div>
						))}
					</div>
				</div>
				<button
					className="absolute left-0 top-1/2 -translate-y-1/2 bg-bg-dark p-3 rounded-full hover:bg-orange transition-all duration-300 z-10 shadow-lg hover:scale-110"
					onClick={scrollPrev}
					aria-label="Previous slide"
				>
					<MdArrowBack
						className="text-white"
						size={24}
					/>
				</button>
				<button
					className="absolute right-0 top-1/2 -translate-y-1/2 bg-bg-dark p-3 rounded-full hover:bg-orange transition-all duration-300 z-10 shadow-lg hover:scale-110"
					onClick={scrollNext}
					aria-label="Next slide"
				>
					<MdNext
						className="text-white"
						size={24}
					/>
				</button>
			</div>
		</div>
	);
};

export default Portfolio;
