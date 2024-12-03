import Image from 'next/image';
import { Partner } from './data';
import Link from 'next/link';

interface PartnerLogoProps {
	partner: Partner;
}

export function PartnerLogo({ partner }: PartnerLogoProps) {
	return (
		<Link
			href={partner.link}
			target='_blank'
			className='relative block h-16 cursor-pointer grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0'
		>
			<Image
				src={partner.logo}
				alt={partner.name}
				width={160}
				height={64}
				className='h-full w-auto object-contain'
			/>
		</Link>
	);
}
