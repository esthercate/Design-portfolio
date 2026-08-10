import Image from 'next/image';
import SocialIcons from '../common/SocialIcons';
import { LinearGradient } from 'react-text-gradients';
import Button from '../ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { BiMessageRoundedMinus } from 'react-icons/bi';
import TrustedBy from '../ui/TrustedBy';

type Props = {};

const Hero = (props: Props) => {
	return (
		<section className="section">
			<div className="container flex items-center justify-between">
				<div className="flex flex-col gap-6">
					<div className="flex items-center gap-1 bg-light-background rounded-full px-5 py-1 w-fit">
						<p className="text-primary">👋 Hi, I'm Catherine</p>
					</div>
					<h1>
						I build modern websites that bring in{' '}
						<span className="text-primary">more customers.</span>
					</h1>
					<p className="text text-balance">
						I design and develop fast, responsive, and SEO-friendly websites
						that turn visitors into customers nd help your business grow.
					</p>
					<div className="flex flex-col tablet:flex-row w-full gap-4">
						<Button
							variant="primary"
							text="View My Work"
							href="#projects"
							icon={<FaArrowRight className="text-white" />}
						/>
						<Button
							variant="secondary"
							text="Let's Talk"
							href="#contact"
							icon={<BiMessageRoundedMinus className="text-xl" />}
						/>
					</div>
					<TrustedBy />
				</div>
				<div className="flex">
					<Image
						src="/images/hero.png"
						alt="Hero"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
