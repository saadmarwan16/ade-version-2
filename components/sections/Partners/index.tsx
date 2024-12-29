import { getTranslations } from 'next-intl/server';
import { PartnerLogo } from './PartnerLogo';
import { TPartner } from '@/lib/types/home_page';
import { FunctionComponent } from 'react';

interface PartnersProps {
	partners: TPartner[];
}

export const Partners: FunctionComponent<PartnersProps> = async ({
	partners,
}) => {
	const t = await getTranslations();

	return (
		<section className='bg-white py-16 sm:py-20'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mb-12'>
					<h2 className='mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent'>
						{t('HomePage.trusted-partners-title')}
					</h2>
					<p className='text-lg text-gray-600'>
						{t('HomePage.trusted-partners-description')}
					</p>
				</div>

				<div className='grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 lg:grid-cols-7'>
					{partners.map((partner) => (
						<PartnerLogo key={partner.id} partner={partner} />
					))}
				</div>
			</div>
		</section>
	);
};
