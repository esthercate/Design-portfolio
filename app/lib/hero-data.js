import { FaXTwitter, FaFigma } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaDocker,
  FaGithub,
  FaBitbucket,
  FaLinkedinIn,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiRubyonrails,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiPlaywright,
} from "react-icons/si";
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { title } from "process";

export const socialIcons = [
	{
		id: 1,
		icon: <FaLinkedinIn size={25} />,
		url: 'https://www.linkedin.com/in/catherine-vuthi-ba18aa179/',
	},
	{
		id: 2,
		icon: <FaXTwitter size={25} />,
		url: 'https://x.com/Cate_ev',
	},
	{
		id: 3,
		icon: <MdWhatsapp size={25} />,
		url: 'https://wa.me/254796510663?text=Hi%20Catherine%2C%20I%27m%20interested%20in%20your%20services.%20Can%20you%20provide%20more%20details%20or%20schedule%20a%20time%20to%20discuss%3F',
	},
];

export const techStack = [
  {
    id: 1,
    icon: <DiMongodb size={30} />,
    color: "#4DB33D",
    title: "MongoDB",
  },
  {
    id: 2,
    icon: <SiExpress size={30} />,
    color: "#ffffff",
    title: "Express"
  },
  {
    id: 3,
    icon: <FaReact size={30} />,
    color: "#61DBFB",
    title: "React"
  },
  {
    id: 4,
    icon: <FaNodeJs size={30} />,
    color: "#68A063",
    title: "Node.js"
  },
];

export const frontend = [
	{
		id: 1,
		icon: <FaHtml5 size={40} />,
		color: '#e54b20',
		title: 'HTML',
	},
	{
		id: 2,
		icon: <FaCss3Alt size={40} />,
		color: '#214ce4',
		title: 'CSS',
	},
	{
		id: 3,
		icon: <FaReact size={40} />,
		color: '#61DBFB',
		title: 'React',
	},
	{
		id: 4,
		icon: <RiNextjsFill size={40} />,
		color: '#ffffff',
		title: 'NextJS',
	},
	{
		id: 5,
		icon: <SiTailwindcss size={40} />,
		color: '#35bef8',
		title: 'TailwindCSS',
	},
	{
		id: 6,
		icon: <FaBootstrap size={40} />,
		color: '#7b11f6',
		title: 'Bootstrap CSS',
	},
];

export const backend = [
	{
		id: 1,
		icon: <RiJavascriptFill size={40} />,
		color: '#f7e029',
		title: 'Javascript',
	},
	{
		id: 2,
		icon: <SiTypescript size={40} />,
		color: '#387bc8',
		title: 'Typescript',
	},
	{
		id: 3,
		icon: <SiMysql size={40} />,
		color: '#4DB33D',
		title: 'MySQL',
	},
	{
		id: 4,
		icon: <SiRedis size={40} />,
		color: '#c73732',
		title: 'Redis',
	},
	{
		id: 5,
		icon: <DiMongodb size={40} />,
		color: '#4DB33D',
		title: 'MongoDB',
	},
	{
		id: 6,
		icon: <SiPostgresql size={40} />,
		color: '#4DB33D',
		title: 'PostgreSQL',
	},
];

export const otherTools = [
	{
		id: 1,
		icon: <SiExpress size={40} />,
		color: '#ffffff',
		title: 'Express',
	},
	{
		id: 2,
		icon: <FaNodeJs size={40} />,
		color: '#68A063',
		title: 'NodeJS',
	},
	{
		id: 3,
		icon: <FaDocker size={40} />,
		color: '#2f99ed',
		title: 'Docker',
	},
	{
		id: 4,
		icon: <FaGithub size={40} />,
		color: '#fff',
		title: 'Github',
	},
	{
		id: 5,
		icon: <FaBitbucket size={40} />,
		color: '#2e88ff',
		title: 'Bitbucket',
	},
	{
		id: 6,
		icon: <FaFigma size={40} />,
		color: '#21d285',
		title: 'Figma',
	},
];
