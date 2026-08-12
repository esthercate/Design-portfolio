import type { Testimonial } from '../../lib/testimonials';

type TestimonialCardProps = {
	testimonial: Testimonial;
};

const cardStyles: Record<Testimonial['color'], string> = {
	primary: 'bg-primary text-white',
	secondary: 'bg-secondary text-white',
	'primary-soft': 'bg-primary-soft text-text',
	'primary-dark': 'bg-primary-dark text-white',

	background: 'bg-background text-text',
	'light-background': 'bg-light-background text-text',

	text: 'bg-text text-white',
	'text-secondary': 'bg-text-secondary text-white',

	border: 'bg-border text-text',
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
	const isDark =
		testimonial.color === 'primary' ||
		testimonial.color === 'secondary' ||
		testimonial.color === 'primary-dark' ||
		testimonial.color === 'text' ||
		testimonial.color === 'text-secondary';

	return (
		<article
			className={`flex w-72 shrink-0 flex-col justify-between gap-2 rounded-2xl p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 tablet:w-80 ${cardStyles[testimonial.color]}`}
		>
			{/* Quote */}
			<div>
				<p
					className={`text-sm leading-6 ${
						isDark ? 'text-white/90' : 'text-text-secondary'
					}`}
				>
					"{testimonial.quote}"
				</p>
			</div>

			{/* Client */}
			<div className='flex flex-col'>
				<p
					className={`text-sm font-semibold ${
						isDark ? 'text-white' : 'text-text'
					}`}
				>
					{testimonial.name}
				</p>

				<p
					className={`text-xs ${
						isDark ? 'text-white/60' : 'text-text-secondary'
					}`}
				>
					{testimonial.role}
				</p>
			</div>
		</article>
	);
};

export default TestimonialCard;
