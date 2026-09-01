import { FaXTwitter } from 'react-icons/fa6';
import { MdWhatsapp, MdOutlineMarkEmailRead } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const socialIcons = [
	{
		id: 1,
		icon: <FaLinkedinIn size={20} />,
		url: 'https://www.linkedin.com/in/catherine-esther-vuthi/',
	},
	{
		id: 2,
		icon: <FaGithub size={20} />,
		url: 'https://github.com/esthercate',
	},
	{
		id: 3,
		icon: <FaXTwitter size={20} />,
		url: 'https://x.com/Cate_ev',
	},
	{
		id: 4,
		icon: <MdOutlineMarkEmailRead size={20} />,
		url: 'mailto:catherinev.codes@gmail.com',
	},
	{
		id: 5,
		icon: <MdWhatsapp size={20} />,
		url: 'https://wa.me/254181244759',
	},
];
