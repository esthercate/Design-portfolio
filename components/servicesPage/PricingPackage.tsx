import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import {
	addOns,
	addOnsNote,
	baseInclusions,
	basePricing,
} from '@/lib/services-data';
import { MdCheck } from 'react-icons/md';
import { IoMdCheckboxOutline } from 'react-icons/io';

const PricingPackage = () => {
	return (
		<section className="section bg-light-background">
			<div className="container flex flex-col items-center gap-12">
				<SectionTitle
					title="Pricing & What's Included"
					description="One clear package, with extras only if your business needs them."
				/>

				<div className="grid w-full max-w-5xl items-stretch gap-6 tablet:grid-cols-2">
					{/* ---------- base package ---------- */}

					<div className="flex h-full flex-col gap-6 rounded-xl border border-border bg-background p-8">
						<div className="flex flex-col gap-3">
							<small className="font-medium uppercase tracking-wide text-primary">
								{basePricing.title}
							</small>

							<h2>{basePricing.price}</h2>

							<p className="text-sm">{basePricing.scope}</p>
						</div>

						<div className="border-t border-border pt-6">
							<small className="font-semibold text-text">
								Included in every project
							</small>

							<div className="mt-4 flex flex-col gap-3">
								{baseInclusions.map((item) => (
									<div
										key={item}
										className="flex items-start gap-3"
									>
										<IoMdCheckboxOutline
											className="mt-1 shrink-0 text-primary"
											size={24}
										/>
										<p className="text-sm">{item}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* ---------- add-ons ---------- */}

					<div className="flex h-full flex-col gap-6 rounded-xl border border-border bg-background p-8">
						<div className="flex flex-col gap-2">
							<small className="font-medium uppercase tracking-wide text-primary">
								Add-ons
							</small>

							<h2>Additional cost</h2>

							<p className="text-sm">{addOnsNote}</p>
						</div>

						<div className="flex flex-col gap-3 border-t border-border pt-6">
							{addOns.map((addOn) => (
								<div
									key={addOn.title}
									className="flex items-center gap-3"
								>
									<IoMdCheckboxOutline
										className="mt-1 shrink-0 text-primary"
										size={24}
									/>
									<p className="text-sm">{addOn.title}</p>
								</div>
							))}
						</div>
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

export default PricingPackage;
