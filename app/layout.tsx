import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '../components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '800'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Catherine - Web Developer',
	description:
		'I build modern websites that help businesses attract more customers.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
		>
			<body className={`${poppins.className} flex min-h-screen flex-col`}>
				<Navbar />
				<main className="flex-1">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
