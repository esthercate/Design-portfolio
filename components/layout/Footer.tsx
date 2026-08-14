import Link from 'next/link';
import { navLinks } from './navLinks';
import {
	MdOutlineLocationOn,
	MdOutlineMarkEmailRead,
	MdOutlinePhone,
} from 'react-icons/md';
import { socialIcons } from '../../lib/social-data';

type Props = {};

const Footer = (props: Props) => {
	return (
		<section className="section bg-primary-dark py-8">
			<div className="container w-full flex flex-col gap-6">
				<div className="flex flex-col laptop:flex-row gap-5 justify-between">
					<div className="flex flex-col gap-3 laptop:max-w-90">
						<p className="text-base font-semibold leading-tight text-white">
							Catherine Vuthi
						</p>
						<small className="text-border flex flex-col">
							Helping local businesses build a strong online presence with
							modern websites. Turning business ideas into purposeful digital
							experiences that connect brands with the customers they want to
							reach.
						</small>
						<div className="flex gap-5 text-border pt-2">
							{socialIcons.map((social) => (
								<a
									key={social.id}
									href={social.url}
									className="border border-border p-2 rounded-full"
									target="_blank"
									rel="noopener noreferrer"
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-semibold leading-tight text-white">
							Quick Links
						</p>
						<div className="flex flex-col gap-2">
							{navLinks.map((menu) => (
								<Link
									href={menu.link}
									key={menu.title}
									className={
										'group relative transition-colors duration-300 text-border text-xs tablet:text-sm font-normal leading- '
									}
								>
									{menu.title}
								</Link>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-semibold leading-tight text-white">
							Services
						</p>
						<ul className="text-border flex flex-col gap-2 text-xs tablet:text-sm font-normal leading-5">
							<li>Web Development</li>
							<li>Web Redesign</li>
							<li>Web Maintenance</li>
							<li>SEO Optimization</li>
						</ul>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-semibold leading-tight text-white">
							Let's Connect
						</p>
						<div className="text-border flex flex-col gap-2 text-xs tablet:text-sm font-normal leading-5">
							<span className="flex gap-2 items-center">
								<MdOutlineLocationOn size={20} />
								Nairobi, Kenya
							</span>
							<span className="flex gap-2 items-center">
								<MdOutlineMarkEmailRead size={20} />
								catherinev.code@gmail.com
							</span>
							<span className="flex gap-2 items-center">
								<MdOutlinePhone size={20} />
								+254 700 111 222
							</span>
						</div>
					</div>
				</div>
				<div className="w-full text-center">
					<small className="text-border">
						Copyright © {new Date().getFullYear()} - All right reserved.
					</small>
				</div>
			</div>
		</section>
	);
};

export default Footer;
