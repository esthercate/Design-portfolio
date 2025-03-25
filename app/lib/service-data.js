import { IoIosLaptop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineSupportAgent, MdOutlineManageAccounts } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';

export const services = [
	{
		id: 1,
		slug: 'web-development',
		icon: (
			<IoIosLaptop
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
			<FaMobileAlt
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
		slug: 'seo',
		icon: (
			<SiSimpleanalytics
				size={50}
				className="text-orange"
			/>
		),
		title: 'SEO',
		description:
			'Optimizing your online presence to boost visibility and drive targeted traffic to your website.',
	},
	{
		id: 4,
		slug: 'ui-ux-design',
		icon: (
			<FiFigma
				size={50}
				className="text-orange"
			/>
		),
		title: 'UI/UX Design',
		description:
			'Creating high-quality UI/UX designs, prototypes, and wireframes for web and mobile applications.',
	},
	{
		id: 5,
		slug: 'wordpress-web-va',
		icon: (
			<MdOutlineManageAccounts
				size={50}
				className="text-orange"
			/>
		),
		title: 'Web & WordPress Management VA',
		description:
			'Providing website and Wordpress management, content updates, plugin handling, to keep your site running smoothly.',
	},
	{
		id: 6,
		slug: 'pinterest-va',
		icon: (
			<MdOutlineSupportAgent
				size={50}
				className="text-orange"
			/>
		),
		title: 'Pinterest VA Services',
		description:
			'Helping you grow your Pinterest presence through pin creation, scheduling, optimization, and engagement strategies.',
	},
];
