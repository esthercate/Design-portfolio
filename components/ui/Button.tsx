import type { ReactNode } from 'react';

type CTAButtonProps = {
	text: string;
	href: string;
	variant?: 'primary' | 'secondary';
	icon?: ReactNode;
};

export default function CTAButton({
	text,
	href,
	variant = 'primary',
	icon,
}: CTAButtonProps) {
	const baseStyles =
		'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium cursor-pointer transition-all duration-300 shadow-md';

	const variants = {
		primary:
			'bg-gradient-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary hover:-translate-y-0.5 hover:shadow-lg',

		secondary:
			'border border-border bg-background text-text hover:border-primary hover:text-primary hover:-translate-y-0.5',
	};

	return (
		<a
			href={href}
			className={`${baseStyles} ${variants[variant]}`}
		>
			<span>{text}</span>

			{icon && (
  <span className="flex items-center transition-transform duration-300 group-hover:translate-x-1">
    {icon}
  </span>
)}
		</a>
	);
}
