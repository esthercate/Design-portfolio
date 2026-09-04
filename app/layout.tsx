import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '../components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '800'],
	display: 'swap',
});

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? 'https://catherine-vuthi.vercel.app';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Catherine Vuthi | Web Developer in Nairobi',
		template: '%s | Catherine Vuthi',
	},
	description:
		'Custom website development and redesigns for local businesses in Nairobi. I build fast, responsive, SEO-friendly websites with Next.js that help you attract more customers online.',
	keywords: [
		'web developer Nairobi',
		'Next.js developer',
		'website development Kenya',
		'website redesign services',
		'freelance web developer',
		'small business website design',
		'affordable web developer Kenya',
		'responsive website design',
		'ecommerce website development',
		'full stack web developer',
		'remote web developer',
		'frontend web developer Nairobi',
		'frontend web developer Kenya,',
		'react developer',
		'javascript developer Kenya',
		'web development services',
		'web development company',
		'cheap websites',
		'freelance software developer',
		'senior software developer',
		'website redesign and development',
		'website redesign Nairobi',
		'website redesign kenya',
		'best website development company Nairobi',
		'website development agency',
	],
	openGraph: {
		title: 'Catherine Vuthi | Next.js Web Developer in Nairobi',
		description:
			'Custom website development and redesigns for local businesses in Nairobi, built with Next.js.',
		url: '/',
		siteName: 'Catherine Vuthi',
		locale: 'en_US',
		type: 'website',
	},
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
				<main className="flex-1">
					{children}
					<WhatsAppButton />
				</main>

				<Footer />
			</body>
		</html>
	);
}
