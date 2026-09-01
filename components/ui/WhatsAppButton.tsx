import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
	const phoneNumber = '254181244759';

	const message = encodeURIComponent(
		'Hi, I would like to know more about your web development services.',
	);

	return (
		<a
			href={`https://wa.me/${phoneNumber}?text=${message}`}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Chat with me on WhatsApp"
			className="fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
		>
			<FaWhatsapp size={30} />
		</a>
	);
};

export default WhatsAppButton;
