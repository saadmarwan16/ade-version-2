import { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

function HeroActionsComponent() {
	return (
		<div className='mb-8 flex flex-wrap gap-6 lg:mb-0'>
			<Button variant='primary' href='/about'>
				Learn more
				<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
			</Button>
			<Button variant='secondary' href='#projects'>
				View projects
			</Button>
		</div>
	);
}

export const HeroActions = memo(HeroActionsComponent);
