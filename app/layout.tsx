import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Raghav Mriuanjaya | Portfolio',
	description:
		'Strategic Computer Science student specializing in Data Science, financial markets, and cybersecurity. Passionate about transforming complex datasets into actionable insights.',
	keywords: [
		'Data Science',
		'Cybersecurity',
		'Financial Markets',
		'Computer Science',
		'Data Analytics',
		'Portfolio',
	],
	openGraph: {
		title: 'Raghav Mriuanjaya | Portfolio',
		description:
			'Strategic Computer Science student specializing in Data Science, financial markets, and cybersecurity. Passionate about transforming complex datasets into actionable insights.',
		url: 'https://raghav.com', // Replace with your actual domain
		siteName: 'Raghav Mriuanjaya',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Raghav Mriuanjaya | Portfolio',
		description:
			'Strategic Computer Science student specializing in Data Science, financial markets, and cybersecurity. Passionate about transforming complex datasets into actionable insights.',
	},
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
