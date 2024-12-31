import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { ContactSection } from '@/components/contact/ContactSection';
import { FunctionComponent } from 'react';
import { Locale } from '@/i18n/routing';
import { fetchWithZod } from '@/lib/fetchWithZod';
import { MetaSchema } from '@/lib/types/meta';
import { env } from '@/env';
import { metaQuery } from '@/lib/quiries/meta';

interface ContactPageProps {
	params: {
		locale: Locale;
	};
}

const ContactPage: FunctionComponent<ContactPageProps> = async ({
	params: { locale },
}) => {
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

export default ContactPage;
