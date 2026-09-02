import Image from 'next/image';
import Button from '../ui/Button';
import { FaFileDownload } from 'react-icons/fa';
import { aboutPhoto, highlights } from '@/lib/about-data';

const AboutMe = () => {
  return (
		<section
			id="about"
			className="section bg-light-background"
		>
			<div className="container flex flex-col laptop:flex-row items-center justify-between w-full gap-16">
				<div className="w-full laptop:w-1/3 flex flex-col gap-6">
					<Image
						src={aboutPhoto.src}
						alt={aboutPhoto.alt}
						width={800}
						height={800}
						className="rounded-lg"
					/>

					<Button
						variant="primary"
						text="View My Resume"
						href={
							'https://docs.google.com/document/d/1eucEq29w4fc8iu8ph6ud3LZsmxUY4rpbgOrNuq5iLbs/edit?usp=sharing'
						}
						newTab
						icon={<FaFileDownload className="text-white text-lg" />}
					/>
				</div>

				<div className="flex flex-col gap-4 w-full laptop:w-2/3">
					<span className="text-primary font-semibold">ABOUT ME</span>

					<h2>The story behind the code</h2>

					<div className="flex flex-col gap-2">
						<p>
							<span className="font-semibold text-text">
								I&apos;m a software engineer with over 4 years of experience,
							</span>{' '}
							and I help{' '}
							<span className="font-semibold text-primary">
								local businesses
							</span>{' '}
							build and improve their online presence through websites designed
							to establish credibility, reach more customers, and support their
							growth.
						</p>
						<p>
							It wasn&apos;t always the plan. Growing up, I wanted to become{' '}
							<span className="font-semibold text-primary">a pilot</span>. I
							loved the idea of exploring new places and discovering new things.
							Life took a different route, but I found that same pull toward
							discovery in{' '}
							<span className="font-semibold text-primary">
								web development
							</span>
							: solving problems and turning ideas into things people actually
							use. Today, that&apos;s what drives every project, creating{' '}
							<span className="font-semibold text-text">
								fast, responsive, accessible websites built with a purpose.
							</span>
						</p>
						<p>
							When I'm not coding, you'll probably find me outdoors. I enjoy
							hiking and exploring the nature. These activities keep me active,
							clear my mind, and teach me the patience and consistency I bring
							to everything I do.
						</p>
					</div>

					<div className="flex flex-col tablet:flex-row justify-between gap-y-3">
						{highlights.map((item) => {
							const Icon = item.icon;

							return (
								<div
									key={item.label}
									className="flex items-center gap-2"
								>
									<Icon className="text-primary" />
									<small>{item.label}</small>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
