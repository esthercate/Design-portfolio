import Button from '../ui/Button';
import { FaArrowRight } from 'react-icons/fa';

type CtaProps = {
	variant?: 'primary' | 'soft';
	title?: string;
	description?: string;
	buttonText?: string;
	href?: string;
};

const variantStyles = {
	primary: {
		section: 'bg-primary',
		title: 'text-white',
		description: 'text-light-background',
		buttonVariant: 'secondary' as const,
		iconClass: 'text-lg',
	},
	soft: {
		section: 'bg-primary-soft',
		title: 'text-text',
		description: 'text-text-secondary',
		buttonVariant: 'primary' as const,
		iconClass: 'text-white text-lg',
	},
};

const Cta = ({
	variant = 'primary',
	title = 'Ready to grow your business online?',
	description = 'Your website is often the first impression customers have of your business. Make it count with a website that builds credibility, attracts local customers, and drives growth.',
	buttonText = "Let's Build Something",
	href = '/#contact',
}: CtaProps) => {
	const style = variantStyles[variant];

	return (
		<section className={`section ${style.section}`}>
			<div className="container flex w-full flex-col items-center justify-between gap-5 laptop:flex-row">
				<div className="flex w-full flex-col gap-5 laptop:w-2/3">
					<h2 className={style.title}>{title}</h2>
					<p className={style.description}>{description}</p>
				</div>
				<Button
					variant={style.buttonVariant}
					text={buttonText}
					href={href}
					icon={<FaArrowRight className={style.iconClass} />}
				/>
			</div>
		</section>
	);
};

export default Cta;
