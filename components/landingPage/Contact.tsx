import ContactForm from '../ui/ContactForm';
import Button from '../ui/Button';
import { FaWhatsapp } from 'react-icons/fa';

const PHONE_NUMBER = '254181244759';

const Contact = () => {
	const whatsappMessage = encodeURIComponent(
		'Hi, I would like to know more about your web development services.',
	);

	return (
		<div
			className="section bg-primary"
			id="contact"
		>
			<div className="container flex flex-col laptop:flex-row justify-between items-center gap-6 w-full">
				<div className="flex flex-col gap-3 w-full laptop:w-1/2">
					<p className="text-primary-soft">Let&apos;s Work Together</p>
					<h2 className="text-white">Have a project in mind?</h2>
					<h2 className="text-white">Let&apos;s talk.</h2>
					<p className="text-primary-soft">
						Send me a message and I&apos;ll get back to you soon.
					</p>

					<div className="flex flex-col gap-2 pt-2">
						<Button
							variant="secondary"
							text="Quick Response on WhatsApp"
							href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
							icon={<FaWhatsapp className="text-primary text-lg" />}
							target="_blank"
							rel="noopener noreferrer"
						/>
					</div>
				</div>

				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
