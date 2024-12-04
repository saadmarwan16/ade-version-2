import { Phone, Mail, MessageCircle } from 'lucide-react';

const contactInfo = [
	{
		icon: Phone,
		label: 'Phone',
		value: '+229 97 97 97 97',
		href: 'tel:+22997979797',
	},
	{
		icon: MessageCircle,
		label: 'WhatsApp',
		value: '+229 97 97 97 97',
		href: 'https://wa.me/22997979797',
	},
	{
		icon: Mail,
		label: 'Email',
		value: 'info@adebayoademon.com',
		href: 'mailto:info@adebayoademon.com',
	},
];

export function MobileContactInfo() {
	return (
		<div className='space-y-3'>
			{contactInfo.map(({ icon: Icon, label, value, href }) => (
				<a
					key={label}
					href={href}
					target={href.startsWith('http') ? '_blank' : undefined}
					rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
					className='flex items-center gap-4 rounded-lg px-4 py-3 transition-colors hover:bg-gray-50'
				>
					<div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50'>
						<Icon className='h-5 w-5 text-indigo-600' />
					</div>
					<div>
						<div className='text-sm font-medium text-gray-500'>{label}</div>
						<div className='text-gray-900'>{value}</div>
					</div>
				</a>
			))}
		</div>
	);
}
