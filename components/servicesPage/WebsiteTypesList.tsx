import SectionTitle from '../ui/SectionTitle';
import { websiteTypes } from '@/lib/services-data';

const WebsiteTypesList = () => {
	return (
		<section className="section">
			<div className="container flex flex-col items-center gap-12">
				<SectionTitle
					title="Types of Websites I Build"
					description="I don't use pre-made templates or website builders. Each website is custom-built from the ground up."
				/>

				<div className="flex w-full max-w-3xl flex-col">
					{websiteTypes.map((type, index) => (
						<div
							key={type.title}
							className="flex items-start gap-6 border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0"
						>
							<span className="text-2xl font-semibold text-primary-soft tablet:text-3xl">
								{String(index + 1).padStart(2, '0')}
							</span>

							<div className="flex flex-col gap-1">
								<h4>{type.title}</h4>
								<p>{type.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WebsiteTypesList;
