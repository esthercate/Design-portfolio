import { services } from '@/lib/services-data';

const panelStyles = [
	{
		wrapper: 'bg-primary text-background',
		eyebrow: 'text-white/80',
		title: 'text-background',
		description: 'text-white/85',
		buttonVariant: 'secondary' as const,
		iconClass: 'text-primary text-lg',
	},
	{
		wrapper: 'bg-primary-soft text-text',
		eyebrow: 'text-primary',
		title: 'text-text',
		description: 'text-text-secondary',
		buttonVariant: 'primary' as const,
		iconClass: 'text-white text-lg',
	},
];

const eyebrows = ['No website yet?', 'Website feels outdated?'];

const ServiceSplitPanels = () => {
	return (
		<section className="section">
			<div className="container">
				<div className="grid overflow-hidden rounded-3xl border border-border shadow-md tablet:grid-cols-2">
					{services.map((service, index) => {
						const style = panelStyles[index] ?? panelStyles[0];

						return (
							<div
								key={service.title}
								className={`flex flex-col justify-center gap-5 px-8 py-14 tablet:px-10 laptop:px-14 ${style.wrapper}`}
							>
								<span
									className={`text-sm font-semibold tracking-wide ${style.eyebrow}`}
								>
									{eyebrows[index]}
								</span>

								<h2 className={style.title}>{service.title}</h2>

								<p className={style.description}>{service.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServiceSplitPanels;
