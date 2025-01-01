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

interface LocaleLayoutProps extends PropsWithChildren {
	params: {
		locale: Locale;
	};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
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
