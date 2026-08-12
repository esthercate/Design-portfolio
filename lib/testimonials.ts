export type TestimonialColor =
	| 'primary'
	| 'secondary'
	| 'primary-soft'
	| 'primary-dark'
	| 'background'
	| 'light-background'
	| 'text'
	| 'text-secondary'
	| 'border';

export type Testimonial = {
	id: number;
	quote: string;
	name: string;
	role: string;
	color: TestimonialColor;
};

export const testimonials: Testimonial[] = [
	{
		id: 1,
		quote: 'Catherine understood exactly what we needed.',
		name: 'Sarah',
		role: 'Owner, Yoga Studio',
		color: 'primary',
	},
	{
		id: 2,
		quote: 'The website feels modern, professional, and easy to use.',
		name: 'David',
		role: 'Business Owner',
		color: 'primary-soft',
	},
	{
		id: 3,
		quote: 'She turned our ideas into something we were proud to launch.',
		name: 'Michelle',
		role: 'Founder, Beauty Brand',
		color: 'primary-dark',
	},
	{
		id: 4,
		quote: 'Our online presence now represents our business much better.',
		name: 'James',
		role: 'Owner, Restaurant',
		color: 'light-background',
	},
	{
		id: 5,
		quote: 'Professional, thoughtful, and great to work with.',
		name: 'Grace',
		role: 'Small Business Owner',
		color: 'primary-dark',
	},
	{
		id: 6,
		quote: 'She made the entire process simple and straightforward.',
		name: 'Daniel',
		role: 'Founder, Startup',
		color: 'light-background',
	},
	{
		id: 7,
		quote: 'The redesign gave our business a completely different feel online.',
		name: 'Emily',
		role: 'Owner, Consulting Firm',
		color: 'primary',
	},
	{
		id: 8,
		quote:
			'Great communication and attention to detail throughout the project.',
		name: 'Michael',
		role: 'Business Owner',
		color: 'primary-soft',
	},
	{
		id: 9,
		quote: 'The final result was clean, fast, and exactly what we needed.',
		name: 'Olivia',
		role: 'Founder, Wellness Brand',
		color: 'light-background',
	},
];
