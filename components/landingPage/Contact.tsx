import React from 'react'
import ContactForm from '../ui/ContactForm';
import { FaArrowDown } from "react-icons/fa";
import Link from 'next/link';

type Props = {}

const Contact = (props: Props) => {
  return (
		<div
			className="section bg-primary"
			id="contact"
		>
			<div className="container flex flex-col laptop:flex-row justify-between items-center gap-6 w-full">
				<div className="flex flex-col gap-3 w-full laptop:w-1/2">
					<p className="text-primary-soft">Let's Work Together</p>
					<h2 className="text-white">Have a projects in mind?</h2>
					<h2 className="text-white">Let's talk.</h2>
					<p className="flex flex-col text-primary-soft">
						Send me a message and I'll get back to you soon.
						<span>Quick response via whatsApp and phone call.</span>
					</p>
				</div>
				<ContactForm />
			</div>
		</div>
	);
}

export default Contact