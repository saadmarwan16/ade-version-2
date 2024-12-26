import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const getContactDetails = () => {
	const t = useTranslations();

	return [
		{
			icon: Phone,
			label: t('ContactPage.contact-info-phone'),
			value: '+229 97 97 97 97',
			href: 'tel:+22997979797',
		},
		{
			icon: MessageCircle,
			label: t('ContactPage.contact-info-whatsapp'),
			value: '+229 97 97 97 97',
			href: 'https://wa.me/22997979797',
		},
		{
			icon: Mail,
			label: t('ContactPage.contact-info-email'),
			value: 'info@adebayoademon.com',
			href: 'mailto:info@adebayoademon.com',
		},
		{
			icon: MapPin,
			label: t('ContactPage.contact-info-location'),
			value: 'Cotonou, Benin',
			href: 'https://maps.google.com/?q=Cotonou,Benin',
		},
	];
};
