import { MessageCircle } from 'lucide-react';
import { FunctionComponent } from 'react';

interface WhatsAppButtonProps {
	whatsapp: string;
}

export const WhatsAppButton: FunctionComponent<WhatsAppButtonProps> = ({
	whatsapp,
}) => {
	return (
		<a
			href={`https://wa.me/${whatsapp}`}
			target='_blank'
			rel='noopener noreferrer'
			className='fixed bottom-6 right-6 z-50 transform rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1EA952] hover:shadow-xl'
			aria-label='Chat on WhatsApp'
		>
			<MessageCircle className='h-6 w-6' />
		</a>
	);
};
