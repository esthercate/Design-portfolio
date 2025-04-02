import React from 'react';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { MdLeaderboard } from 'react-icons/md';
import { FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

type Props = {};

const valuePropositions = [
	{
		icon: (
			<FaClockRotateLeft
				size={30}
				color="orange"
			/>
		),
		title: 'Save time',
		description: 'Focus on your business while I handle the technical side.',
	},
	{
		icon: (
			<FaChartLine
				size={30}
				color="orange"
			/>
		),
		title: 'Drive Revenue',
		description:
			'I’ll create a seamless user experience that boosts conversions and drives sales.',
	},
	{
		icon: (
			<MdLeaderboard
				size={30}
				color="orange"
			/>
		),
		title: 'Stay Ahead of Competitors',
		description:
			'I’ll keep your website updated, giving you an edge over competitors and keep clients coming back.',
	},
];

const Value = (props: Props) => {
	return (
		<div className="flex flex-col px-5 tablet:px-16 py-10 bg-bg-gray gap-5">
			<div className="grid grid-col-1 tablet:grid-cols-3 gap-5 w-full">
				{valuePropositions.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-3"
					>
						{item.icon}
						<div className="flex flex-col gap-2">
							<h5 className="uppercase">{item.title}</h5>
							<p className="text-xs">{item.description}</p>
						</div>
					</div>
				))}
			</div>
			<Link
				href={'/'}
				className="py-2 px-4 border border-orange hover:bg-orange m-auto rounded-lg flex justify-center items-center mt-3 text-white cursor-pointer"
			>
				Reach out Today
			</Link>
		</div>
	);
};

export default Value;
