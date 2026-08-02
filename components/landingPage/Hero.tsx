import Image from "next/image";
import React from "react";
import SocialIcons from "../common/SocialIcons";
import TechStack from "../common/TechStack";
import { LinearGradient } from "react-text-gradients";
import { FaArrowDown } from "react-icons/fa";
import QrCode from "../common/QrCode";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
		<div className="flex flex-col px-5 tablet:px-16 py-3 laptop:py-10">
			<div className="w-full flex flex-col laptop:flex-row items-center justify-around gap-6">
				<div className="flex flex-col gap-5 w-full laptop:w-1/2">
					<div className="flex flex-col gap-1">
						<p>Hello! I'm Catherine,</p>
					</div>
					<h1 className="text-xl tablet:text-3xl text-orange">Web Developer</h1>
					<p className="tablet:pr-6">
						I specialize in React, Next.js and modern JavaScript, translating
						UI/UX designs into responsive, maintainable, and impactful web
						applications.
					</p>
					<div className="mt-6 flex flex-col laptop:flex-row w-full gap-y-4">
						<SocialIcons />
						{/* <TechStack /> */}
					</div>
				</div>
				<div className="flex">
					<QrCode />
				</div>
			</div>
			<Link
				href="#services"
				className="h-20 w-10 border-2 border-orange mt-20 m-auto rounded-full flex justify-center items-center animate-bounce"
			>
				<FaArrowDown className="text-orange" />
			</Link>
		</div>
	);
};

export default Hero;
