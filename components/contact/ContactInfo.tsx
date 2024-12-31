import { getContactDetails } from '@/utils/constants/contactDetails';
import { useTranslations } from 'next-intl';
import { FunctionComponent } from 'react';

interface ContactInfoProps {
	phone: string;
	whatsapp: string;
	email: string;
	location: string;
}

export const ContactInfo: FunctionComponent<ContactInfoProps> = ({
	phone,
	whatsapp,
	email,
	location,
}) => {
	const t = useTranslations();
	const contactDetails = getContactDetails({
		phone,
		whatsapp,
		email,
		location,
	});

	return (
		<div className='space-y-8'>
			<div>
				<h2 className='mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent'>
					{t('ContactPage.contact-info-title')}
				</h2>
				<p className='text-lg text-gray-600'>
					{t('ContactPage.contact-info-description')}
				</p>
			</div>

			<div className='space-y-6'>
				{contactDetails.map(({ icon: Icon, label, value, href }) => (
					<div key={label} className='flex items-start gap-4'>
						<div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50'>
							<Icon className='h-6 w-6 text-indigo-600' />
						</div>
						<div>
							<div className='mb-1 text-sm font-medium text-gray-500'>
								{label}
							</div>
							{href ? (
								<a
									href={href}
									target={href.startsWith('http') ? '_blank' : undefined}
									rel={
										href.startsWith('http') ? 'noopener noreferrer' : undefined
									}
									className='text-base text-gray-900 transition-colors hover:text-indigo-600 sm:text-lg'
								>
									{value}
								</a>
							) : (
								<div className='text-lg text-gray-900'>{value}</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
