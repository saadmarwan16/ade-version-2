import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';

interface ContactInfo {
	icon: typeof Phone | typeof Mail | typeof MessageCircle;
	label: string;
	value: string;
	href: string;
}

const contactInfo: ContactInfo[] = [
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

export function ContactDropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className='relative' ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center gap-2 text-lg font-medium text-gray-600 transition-colors hover:text-indigo-600 lg:text-xl'
			>
				Contact
				<ChevronDown
					className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
				/>
			</button>

			<div
				className={`absolute right-0 mt-2 w-72 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
					isOpen
						? 'translate-y-0 opacity-100'
						: 'pointer-events-none translate-y-2 opacity-0'
				}`}
			>
				{contactInfo.map(({ icon: Icon, label, value, href }) => (
					<a
						key={label}
						href={href}
						target={href.startsWith('http') ? '_blank' : undefined}
						rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
						className='flex items-center gap-3 p-4 transition-colors hover:bg-gray-50'
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
		</div>
	);
}
