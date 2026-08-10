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
		'inline-flex w-full tablet:max-w-50 items-center justify-center gap-3 rounded-lg px-4 py-2 wide:px-5 wide:py-3 text-xs wide:text-sm font-medium cursor-pointer transition-all duration-300 shadow-md';

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
