'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosSend } from 'react-icons/io';
import { trackEvent } from '@/lib/gtag';

const ContactForm = () => {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm('service_fvy2wyn', 'template_lv220qw', form.current!, {
				publicKey: 'Io2rLntQxWhiWXI_4',
			})
			.then(
				() => {
					trackEvent('generate_lead', { method: 'contact_form' });

					toast.success('Message Sent successfully!', {
						position: 'bottom-right',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: false,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
						transition: Slide,
					});
					if (form.current) {
						form.current.reset();
					}
				},
				(error) => {
					toast.error('Failed to send message');
					console.log('FAILED...', error.text);
				},
			);
	};

	return (
		<div className="flex flex-col w-full laptop:w-1/2">
			<form
				ref={form}
				className="flex flex-col py-4 gap-4 w-full"
				onSubmit={sendEmail}
			>
				<div className="flex gap-4 w-full">
					<input
						type="text"
						placeholder="Your Name"
						name="from_name"
						className="bg-background px-4 py-2 rounded-lg w-full"
						required
					/>
					<input
						type="text"
						placeholder="Email or Phone Number"
						name="from_email"
						className="bg-background px-4 py-2 rounded-lg w-full"
						required
					/>
				</div>

				<textarea
					placeholder="Your Message"
					name="message"
					className="bg-background px-4 py-2 rounded-lg"
					rows={4}
					required
				/>
				<button
					type="submit"
					className="flex w-fit items-center gap-2 rounded-lg bg-black px-6 py-2 text-white transition-colors duration-300 hover:text-white cursor-pointer"
				>
					<span>Send Message</span>
					<IoIosSend />
				</button>
			</form>
			<ToastContainer
				position="bottom-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Slide}
			/>
		</div>
	);
};

export default ContactForm;
