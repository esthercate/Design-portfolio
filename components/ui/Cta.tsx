import Button from '../ui/Button';
import { FaArrowRight } from 'react-icons/fa';

type Props = {};

const Cta = (props: Props) => {
	return (
		<section className="section bg-primary">
			<div className="container flex flex-col laptop:flex-row justify-between items-center gap-5 w-full">
				<div className="flex flex-col gap-5 w-full laptop:w-2/3">
					<h2 className="text-white">Ready to grow your business online?</h2>
					<p className="text-light-background">
						Your website is often the first impression customers have of your
						business. Make it count with a website that builds credibility,
						attracts local customers, and drives growth.
					</p>
				</div>
				<Button
					variant="secondary"
					text="Let’s Build your Website"
					href="#contact"
					icon={<FaArrowRight className="text-lg" />}
				/>
			</div>
		</section>
	);
};

export default Cta;
