import { FunctionComponent, memo } from 'react';
import { SocialLink } from './SocialLink';
import { SocialLink as TSocialLink } from '@/utils/constants/socialLinks';
import { ProfileImage } from './ProfileImage';
import { calculateHexagonPoints } from '@/utils/geometry/hexagon';

const HEXAGON_RADIUS = 140; // Increased radius for more spacing
const points = calculateHexagonPoints(HEXAGON_RADIUS);

interface ProfileSectionProps {
	logo: string;
	socialLinks: TSocialLink[];
}

const ProfileSectionComponent: FunctionComponent<ProfileSectionProps> = ({
	logo,
	socialLinks,
}) => {
	return (
		<div className='relative hidden items-center justify-center lg:flex'>
			<div className='relative h-[350px] w-[350px]'>
				{socialLinks.map((link, index) => (
					<SocialLink
						key={link.id}
						{...link}
						x={points[index].x}
						y={points[index].y}
					/>
				))}
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
					<ProfileImage logo={logo} />
				</div>
			</div>
		</div>
	);
};

export const ProfileSection = memo(ProfileSectionComponent);
