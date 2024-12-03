import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export const metadata: Metadata = {
	title: 'Adébayo Ademon',
	description: 'Biomedical Engineer & International Relations Expert',
	metadataBase: new URL('https://adebayoademon.com'),
	openGraph: {
		title: 'Adébayo Ademon',
		description: 'Biomedical Engineer & International Relations Expert',
		url: 'https://adebayoademon.com',
		siteName: 'Adébayo Ademon',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Adébayo Ademon',
		description: 'Biomedical Engineer & International Relations Expert',
		creator: '@adebayoademon',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body
				className={`${inter.className} antialiased`}
				suppressHydrationWarning
			>
				<Providers>
					<div className='min-h-screen bg-white'>
						<Navbar />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
