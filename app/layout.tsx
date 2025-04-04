import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
	title: 'Catherine - Design Portfolio',
	description: 'Software Engineer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex flex-col h-screen justify-between">{children}</body>
		</html>
	);
}
