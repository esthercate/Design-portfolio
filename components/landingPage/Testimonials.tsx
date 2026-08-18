'use client';

import { testimonials } from '../../lib/testimonials';
import TestimonialCard from '../ui/TestimonialCard';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
	const firstRow = testimonials.slice(0, 4);
	const secondRow = testimonials.slice(4);

	/*
	 * Duplicate each row to create a seamless
	 * infinite marquee animation.
	 */
	const firstRowLoop = [...firstRow, ...firstRow];
	const secondRowLoop = [...secondRow, ...secondRow];

	return (
		<section
			id="testimonials"
			className="section overflow-hidden"
		>
			{/* Section heading */}
			<div className="container">
				<SectionTitle
					title="What My Clients Say"
					description="Don't just take my word for it - see what my customers have to say about their experience."
				/>
			</div>

			{/* Testimonial rows */}
			<div className="mt-12 flex flex-col gap-4">
				{/* Top row → */}
				<div className="group overflow-hidden pt-1">
					<div className="testimonial-marquee-right flex w-max gap-4 group-hover:[animation-play-state:paused]">
						{firstRowLoop.map((testimonial, index) => (
							<TestimonialCard
								key={`top-${testimonial.id}-${index}`}
								testimonial={testimonial}
							/>
						))}
					</div>
				</div>

				{/* Bottom row ← */}
				<div className="group overflow-hidden pt-1">
					<div className="testimonial-marquee-left flex w-max gap-4 group-hover:[animation-play-state:paused]">
						{secondRowLoop.map((testimonial, index) => (
							<TestimonialCard
								key={`bottom-${testimonial.id}-${index}`}
								testimonial={testimonial}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
