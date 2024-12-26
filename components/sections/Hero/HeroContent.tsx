import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { ProfileSection } from './ProfileSection';

export function HeroContent() {
	return (
		<div className='grid min-h-[calc(100vh-5rem)] grid-cols-1 gap-12 lg:grid-cols-2'>
			<div className='flex flex-col justify-center'>
				<HeroTitle />
				<HeroDescription />
				<HeroActions />
			</div>
			<ProfileSection />
		</div>
	);
}
