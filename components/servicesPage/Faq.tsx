import { FaChevronDown } from 'react-icons/fa';

import SectionTitle from '../ui/SectionTitle';

import { faqs } from '@/lib/services-data';

const Faq = () => {
	return (
		<section className="section">
			<div className="container flex flex-col items-center gap-10">
				<SectionTitle
					title="FAQS"
					description="The things most people ask before getting started."
				/>

				<div className="flex w-full max-w-3xl flex-col gap-3">
					{faqs.map((faq) => (
						<details
							key={faq.question}
							className="group rounded-xl border border-border bg-background transition-colors duration-200 hover:border-primary/40 open:border-primary/50"
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
								<h5 className="font-medium">{faq.question}</h5>

								<FaChevronDown
									className="shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
									size={13}
								/>
							</summary>

							<div className="px-5 pb-5 sm:px-6 sm:pb-6">
								<p className="max-w-2xl leading-relaxed text-muted-foreground">
									{faq.answer}
								</p>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	);
};

export default Faq;
