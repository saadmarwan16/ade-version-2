import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '../providers';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { MetaSchema } from '@/lib/types/meta';
import { env } from '@/env';
import { metaQuery } from '@/lib/quiries/meta';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

// export const viewport: Viewport = {
// 	width: 'device-width',
// 	initialScale: 1,
// 	maximumScale: 1,
// 	userScalable: false,
// };

// export const metadata: Metadata = {
// 	title: 'Adébayo Ademon', // 50 - 70 characters
// 	description: 'Biomedical Engineer & International Relations Expert', // Upto 200 characters
// 	metadataBase: new URL('https://adebayoademon.com'),
// 	keywords: ['ademon', 'adebayo', 'biomedical', 'international', 'relations'],
// 	alternates: {
// 		canonical: 'https://adebayoademon.com',
// 		languages: {
// 			en: 'https://adebayoademon.com/en',
// 			fr: 'https://adebayoademon.com/fr',
// 			tr: 'https://adebayoademon.com/tr',
// 		},
// 	},
// 	openGraph: {
// 		title: 'Adébayo Ademon', // 50 - 70 characters
// 		description: 'Biomedical Engineer & International Relations Expert', // Upto 200 characters
// 		images: 'https://adebayoademon.com/og-image.png', // Recommended: (1200x630)px with an aspect ratio of 1.91:1
// 		url: 'https://adebayoademon.com',
// 		siteName: 'Adébayo Ademon',
// 		locale: 'en_US',
// 		type: 'website', // Article for the gallery details and activity details page and website for all the other pages
// 	},
// 	twitter: {
// 		title: 'Adébayo Ademon',
// 		description: 'Biomedical Engineer & International Relations Expert',
// 		images: 'https://adebayoademon.com/og-image.png',
// 		card: 'summary_large_image',
// 	},
// };

interface LocaleLayoutProps extends PropsWithChildren {
	params: {
		locale: Locale;
	};
}

const LocaleLayout = async ({
	children,
	params: { locale },
}: LocaleLayoutProps) => {
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages();
	const { data } = await fetchWithZod(
		MetaSchema,
		`${env.NEXT_PUBLIC_API_URL}/meta?${metaQuery(locale)}`
	);

	return (
		<html lang='en' className='scroll-smooth' suppressHydrationWarning>
			<head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body
				className={`${inter.className} antialiased`}
				suppressHydrationWarning
			>
				<NextIntlClientProvider messages={messages}>
					<Providers>
						<Toaster />
						<div className='min-h-screen bg-white'>
							<Navbar locale={locale} logo={data.logo.url} />
							{children}
							<Footer meta={data} />
							<WhatsAppButton whatsapp={data.whatsapp} />
						</div>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
