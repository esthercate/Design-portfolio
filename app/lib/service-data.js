import { SiSimpleanalytics } from 'react-icons/si';
import { MdOutlineSupportAgent, MdOutlineManageAccounts } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';
import { FaWordpressSimple, FaCode } from 'react-icons/fa6';

export const services = [
	{
		id: 1,
		slug: 'web-development',
		icon: (
			<FaCode
				size={50}
				className="text-orange"
			/>
		),
		title: 'Web Development',
		description:
			"Crafting responsive and visually stunning websites tailored to your brand's unique identity.",
	},
	{
		id: 2,
		slug: 'wordpress-development',
		icon: (
			<FaWordpressSimple
				size={50}
				className="text-orange"
			/>
		),
		title: 'WordPress Development',
		description:
			'Building and empowering your online presence with professional WordPress development services.',
	},
	{
		id: 3,
		slug: 'quality-assuarance',
		icon: (
			<SiSimpleanalytics
				size={50}
				className="text-orange"
			/>
		),
		title: 'QA Analysis',
		description:
			'Website testing to ensure functionality, performance, and a seamless user experience.',
	},
	// {
	// 	id: 3,
	// 	slug: 'seo',
	// 	icon: (
	// 		<SiSimpleanalytics
	// 			size={50}
	// 			className="text-orange"
	// 		/>
	// 	),
	// 	title: 'QA Analysis',
	// 	description:
	// 		'Optimizing your online presence to boost visibility and drive targeted traffic to your website.',
	// },
	// {
	// 	id: 4,
	// 	slug: 'ui-ux-design',
	// 	icon: (
	// 		<FiFigma
	// 			size={50}
	// 			className="text-orange"
	// 		/>
	// 	),
	// 	title: 'UI/UX Design',
	// 	description:
	// 		'Creating high-quality UI/UX designs, prototypes, and wireframes for web and mobile applications.',
	// },
	// {
	// 	id: 5,
	// 	slug: 'pinterest-va',
	// 	icon: (
	// 		<MdOutlineSupportAgent
	// 			size={50}
	// 			className="text-orange"
	// 		/>
	// 	),
	// 	title: 'Pinterest VA',
	// 	description:
	// 		'Helping you grow your Pinterest presence through pin creation, scheduling, optimization, and engagement strategies.',
	// },
];
