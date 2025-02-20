import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { ContactSection } from '@/components/contact/ContactSection';
import { FunctionComponent } from 'react';
import { getPathname, Locale } from '@/i18n/routing';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { MetaSchema } from '@/lib/types/meta';
import { env } from '@/env';
import { metaQuery } from '@/lib/quiries/meta';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { constructMetadata } from '@/lib/constructMetadata';

interface ContactPageProps {
	params: {
		locale: Locale;
	};
}

export const generateMetadata = async ({
	params: { locale },
}: ContactPageProps): Promise<Metadata> => {
	const t = await getTranslations();
	const keywords = t('ContactPage.title')
		.split(' ')
		.filter((word) => word !== '&')
		.map((word) => word.toLowerCase());


	return constructMetadata({
		title: t('ContactPage.title'),
		description: t('ContactPage.description'),
		keywords: ['ademon', 'adebayo', 'amedee', ...keywords],
		canonical: `${env.NEXT_PUBLIC_BASE_URL}/${locale}${getPathname({
			href: '/contact',
			locale: locale,
		})}`,
	});
};

const ContactPage: FunctionComponent<ContactPageProps> = async ({
	params: { locale },
}) => {
	setRequestLocale(locale);
	const { data } = await fetchWithZod(
		MetaSchema,
		`${env.NEXT_PUBLIC_API_URL}/meta?${metaQuery(locale)}`
	);

	return (
		<main className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
			<ContactHero />
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16'>
					<ContactInfo
						phone={data.phone}
						email={data.email}
						location={data.location}
						whatsapp={data.whatsapp}
					/>
					<SocialLinks
						instagram={data.instagram}
						linkedin={data.linkedin}
						twitter={data.twitter}
						facebook={data.facebook}
					/>
				</div>
			</div>
			<ContactSection />
		</main>
	);
};

export const revalidate = 60;

export default ContactPage;
