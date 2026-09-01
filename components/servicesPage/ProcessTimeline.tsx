import SectionTitle from '../ui/SectionTitle';
import { processSteps } from '@/lib/services-data';

const ProcessTimeline = () => {
	return (
		<section className="section">
			<div className="container flex flex-col items-center gap-12">
				<SectionTitle
					title="How I Work"
					description="From first contact to launch, and beyond — here's what working together looks like."
				/>

				<div className="relative flex w-full max-w-2xl flex-col gap-10">
					{/* Connecting line */}
					<span
						aria-hidden
						className="absolute bottom-2 left-6 top-2 w-px bg-border"
					/>

					{processSteps.map((step) => {
						const Icon = step.icon;

						return (
							<div
								key={step.title}
								className="relative flex gap-6"
							>
								<div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md">
									<Icon size={18} />
								</div>

								<div className="flex flex-col gap-1 pt-1.5">
									<div className="flex items-center gap-2">
										<h5>{step.title}</h5>
										{step.optional && (
											<span className="rounded-full border border-border px-2 py-0.5 text-xs text-text-secondary">
												Optional
											</span>
										)}
									</div>
									<p>{step.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProcessTimeline;
