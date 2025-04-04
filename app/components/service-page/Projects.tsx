'use client';
import React from 'react';
import Image from 'next/image';
import hospitalFinder from '../../../public/hospitalfinder.png';

type Props = {};

const Projects = (props: Props) => {
	return (
		<div
			className="flex flex-col px-5 tablet:px-16 py-10 w-full gap-6"
			id="portfolio"
		>
			<div className="flex gap-8 justify-center text-sm">
				<div className="text-orange underline cursor-pointer">All</div>
				<div className="cursor-pointer hover:text-orange hover:underline">
					Development
				</div>
				<div className="cursor-pointer hover:text-orange hover:underline">
					Maintenance
				</div>
				<div className="cursor-pointer hover:text-orange hover:underline">
					UI/UX
				</div>
				<div className="cursor-pointer hover:text-orange hover:underline">
					SEO
				</div>
			</div>
			<div className="w-full flex flex-col gap-4">
				<div className="flex">
					<div className="w-2/5">
						<Image
							src={hospitalFinder}
							width={1005}
							height={500}
							alt="Hospital finder image"
							className="rounded-l-lg"
						/>
					</div>
					<div className="bg-bg-gray w-2/5">Desription</div>
				</div>
				<div className="flex w-full">
					<div className="bg-bg-gray w-2/5">Desription</div>
					<div className="w-2/5">
						<Image
							src={hospitalFinder}
							width={1005}
							height={500}
							alt="Hospital finder image"
							className="rounded-l-lg"
						/>
					</div>
				</div>
				<div className="flex">
					<div className="w-2/5">
						<Image
							src={hospitalFinder}
							width={1005}
							height={500}
							alt="Hospital finder image"
							className="rounded-l-lg"
						/>
					</div>
					<div className="bg-bg-gray w-2/5">Desription</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
