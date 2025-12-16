import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Raghav Mriuanjaya',
	description: 'A portfolio website showcasing my work and projects.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${poppins.variable} font-sans antialiased bg-black text-white text-lg font-medium`}
			>
				{children}
			</body>
		</html>
	);
}
