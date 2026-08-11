import Image from 'next/image'
import Button from '../ui/Button';
import { FaRegUser, FaRegHeart } from 'react-icons/fa6';
import { FaRegCheckCircle } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';

type Props = {}

const AboutMe = (props: Props) => {
  return (
		<section
			id="about"
			className="section bg-light-background"
		>
			<div className="container flex flex-col laptop:flex-row items-center justify-between w-full gap-16">
				<div className="w-full laptop:w-1/3 flex flex-col gap-6">
					<Image
						src="/images/myphoto2.jpeg"
						alt="Hero"
						width={800}
						height={800}
						className="rounded-lg"
					/>
					<Button
						variant="primary"
						text="More About Me"
						href="#projects"
						icon={<FaRegUser className="text-white text-lg" />}
					/>
				</div>
				<div className="flex flex-col gap-4 w-full laptop:w-2/3">
					<span className="text-primary font-semibold">ABOUT ME</span>
					<h2>The story behind the code</h2>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-2">
							<p>
								<span className="font-semibold text-text">
									I didn't always know I'd become a software engineer.
								</span>{' '}
								When I was younger I wanted to become{' '}
								<span className="font-semibold text-primary">a pilot.</span> I
								loved the idea of exploring new places, discovering new things,
								and seeing where the journey could take me.
							</p>

							<p>
								<span className="font-semibold text-text">
									But life had a different plan.
								</span>{' '}
								Today, I'm a{' '}
								<span className="font-semibold text-primary">
									software engineer with over 4 years of experience
								</span>
								, building web applications, solving complex problems, turning
								ideas into working products and creating digital experiences
								that are not only beautiful, but fast, responsive, accessible,
								and built with a purpose.
							</p>

							{/* <p>
								And one thing I've learned about myself along the way is that{' '}
								<span className="font-semibold text-text">
									time flies when I'm writing code.
								</span>{' '}
								I can sit down with a problem, start figuring it out, and
								suddenly realize hours have passed. I love that combination of
								creativity, logic, and problem-solving that comes with building
								software.
							</p> */}

							<p>
								I found my passion in{' '}
								<span className="font-semibold text-primary">
									web development.
								</span>{' '}
								Now, I help{' '}
								<span className="text-primary font-semibold">
									local businesses
								</span>{' '}
								build and improve their online presence through websites
								designed to establish credibility, reach more customers, and
								support their growth.
							</p>

							{/* <p className="font-medium text-text">
								I may not have become a pilot, but now I help my clients turn
								their ideas into reality.
							</p> */}
						</div>
					</div>
					<div className="flex flex-col laptop:flex-row justify-between gap-y-3 pt-4">
						<div className="flex gap-2 items-center">
							<FaRegCheckCircle className="text-primary" />
							<small>Clean & Modern Design</small>
						</div>
						<div className="flex gap-2 items-center">
							<GiProgression className="text-primary" />
							<small>Performance Focused</small>
						</div>
						<div className="flex gap-2 items-center">
							<FaRegHeart className="text-primary" />
							<small>Client Success Driven</small>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe