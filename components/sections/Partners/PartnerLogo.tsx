import Image from 'next/image';
import { TPartner } from '@/lib/types/home_page';
import { FunctionComponent } from 'react';
import { constructImageLink } from '@/lib/contructImageLink';

interface PartnerLogoProps {
	partner: TPartner;
}

export const PartnerLogo: FunctionComponent<PartnerLogoProps> = ({
	partner,
}) => {
	return (
		<a
			href={partner.link}
			target='_blank'
			className='relative block h-16 cursor-pointer grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0'
		>
			<Image
				src={constructImageLink(partner.logo.url)}
				alt={partner.company}
				width={160}
				height={64}
				className='h-full w-auto object-contain'
			/>
		</a>
	);
};
