import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const getContactDetails = ({
	phone,
	email,
	location,
	whatsapp,
}: {
	phone: string;
	email: string;
	location: string;
	whatsapp: string;
}) => {
	const t = useTranslations();

	return [
		{
			icon: Phone,
			label: t('ContactPage.contact-info-phone'),
			value: phone,
			href: `tel:${phone}`,
		},
		{
			icon: MessageCircle,
			label: t('ContactPage.contact-info-whatsapp'),
			value: whatsapp,
			href: `https://wa.me/${whatsapp}`,
		},
		{
			icon: Mail,
			label: t('ContactPage.contact-info-email'),
			value: email,
			href: `mailto:${email}`,
		},
		{
			icon: MapPin,
			label: t('ContactPage.contact-info-location'),
			value: location,
			href: `https://maps.google.com/?q=${location}`,
		},
	];
};
