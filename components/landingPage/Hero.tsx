import Image from 'next/image';
import Button from '../ui/Button';
import { FaArrowRight } from 'react-icons/fa';
import { BiMessageRoundedMinus } from 'react-icons/bi';
import TrustedBy from '../ui/TrustedBy';

type Props = {};

const Hero = (props: Props) => {
	return (
		<section
			className="section bg-cover bg-center bg-no-repeat mt-24"
			style={{ backgroundImage: "url('/images/bg-image.png')" }}
		>
			<div className="container flex flex-col gap-y-8 laptop:flex-row items-center justify-between w-full">
				<div className="flex flex-col gap-6 w-full laptop:w-3/4">
					<div className="flex items-center gap-1 bg-light-background rounded-full px-5 py-1 w-fit">
						<p className="text-primary">👋 Hi, I'm Catherine</p>
					</div>
					<h1>
						I build modern websites that bring in{' '}
						<span className="text-primary">more customers.</span>
					</h1>
					<p className="text text-balance">
						I build fast, responsive, and custom web applications designed to
						turn visitors into customers, generate leads and drive business
						growth.
					</p>
					<div className="flex flex-col tablet:flex-row w-full gap-4">
						<Button
							variant="primary"
							text="Get in Touch"
							href="#contact"
							icon={<BiMessageRoundedMinus className="text-xl" />}
						/>
						<Button
							variant="secondary"
							text="View My Work"
							href="#projects"
							icon={<FaArrowRight className="text-white" />}
						/>
					</div>
					<TrustedBy />
				</div>
				<div className="flex relative">
					<Image
						src="/images/heroimg.png"
						alt="Hero"
						width={650}
						height={500}
					/>
					<div className="absolute bottom-8 tablet:bottom-16 right-2 tablet:right-[-100] bg-white/80 rounded-md max-w-40 p-4 flex flex-col gap-2 shadow-2xl">
						<small className="font-medium">
							Building digital experiences that make an impact.
						</small>
						<div className="w-1/4 h-1 bg-primary" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
