import SectionTitle from '../ui/SectionTitle';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../ui/Button';
import { addOns, pricingFactors } from '@/lib/services-data';

const Pricing = () => {
	return (
		<section className="section bg-light-background">
			<div className="container flex flex-col items-center gap-12">
				<SectionTitle
					title="Website Pricing"
					description="Every website is different, your quote depends on a few key factors."
				/>

				<div className="grid w-full gap-6 tablet:grid-cols-3">
					{pricingFactors.map((factor) => {
						const Icon = factor.icon;

						return (
							<div
								key={factor.title}
								className="flex flex-col gap-3 rounded-xl border border-border bg-background p-6"
							>
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary">
									<Icon size={20} />
								</div>
								<h5>{factor.title}</h5>
								<p>{factor.description}</p>
							</div>
						);
					})}
				</div>

				<div className="flex flex-col items-center gap-4">
					<small className="text-center">
						Common add-ons that affect functionality:
					</small>
					<div className="flex flex-wrap max-w-4xl justify-center gap-2">
						{addOns.map((addOn) => {
							const Icon = addOn.icon;

							return (
								<span
									key={addOn.title}
									className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-text "
								>
									<Icon
										className="text-primary"
										size={14}
									/>
									{addOn.title}
								</span>
							);
						})}
					</div>
				</div>

				<Button
					variant="primary"
					text="Let's Discuss Your Project"
					href="/#contact"
					icon={<FaArrowRight className="text-white text-lg" />}
				/>
			</div>
		</section>
	);
};

export default Pricing;
