import { fetchWithZod } from '@/lib/fetchWithZod';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { ProfileSection } from './ProfileSection';
import { MetaSchema } from '@/lib/types/meta';
import { env } from '@/env';
import { metaQuery } from '@/lib/quiries/meta';
import { Locale } from '@/i18n/routing';
import { FunctionComponent } from 'react';
import { getSocialLinks } from '@/utils/constants/socialLinks';

interface HeroContentProps {
	locale: Locale;
}

export const HeroContent: FunctionComponent<HeroContentProps> = async ({
	locale,
}) => {
	const { data } = await fetchWithZod(
		MetaSchema,
		`${env.NEXT_PUBLIC_API_URL}/meta?${metaQuery(locale)}`
	);
	const socialLinks = getSocialLinks({
		email: data.email,
		instagram: data.instagram,
		youtube: data.youtube,
		linkedin: data.linkedin,
		x: data.twitter,
		facebook: data.facebook,
	});

	return (
		<div className='grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-12 lg:grid-cols-2'>
			<div className='flex flex-col justify-center'>
				<HeroTitle />
				<HeroDescription />
				<HeroActions />
			</div>
			<ProfileSection logo={data.logo.url} socialLinks={socialLinks} />
		</div>
	);
};
