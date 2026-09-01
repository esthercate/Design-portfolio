import { FaRegCheckCircle } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { baseInclusions } from '@/lib/services-data';

const Features = () => {
	return (
		<section className="section">
			<div className="container flex flex-col items-center gap-10">
				<SectionTitle
					title="What's Included"
					description="Every project comes standard with these, whether it's a new build or a redesign."
				/>

				<div className="grid w-full max-w-4xl gap-x-8 gap-y-4 tablet:grid-cols-2 desktop:grid-cols-3">
					{baseInclusions.map((item) => (
						<div
							key={item}
							className="flex items-center gap-3"
						>
							<FaRegCheckCircle
								className="shrink-0 text-primary"
								size={18}
							/>
							<p className="text-text">{item}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
