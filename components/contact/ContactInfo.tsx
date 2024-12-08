import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const contactDetails = [
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
	{
		icon: MapPin,
		label: 'Location',
		value: 'Cotonou, Benin',
		href: 'https://maps.google.com/?q=Cotonou,Benin',
	},
];

export function ContactInfo() {
	return (
		<div className='space-y-8'>
			<div>
				<h2 className='mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent'>
					Contact Information
				</h2>
				<p className='text-lg text-gray-600'>
					Feel free to reach out through any of these channels. I&apos;ll get back to
					you as soon as possible.
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
									className='text-lg text-gray-900 transition-colors hover:text-indigo-600'
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
}
