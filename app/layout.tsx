import type { Metadata } from 'next';
import './globals.css';

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
