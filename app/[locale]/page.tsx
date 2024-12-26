import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Partners } from '@/components/sections/Partners';
import { RecentActivities } from '@/components/sections/RecentActivities';

export default function Home() {
	return (
		<main>
			<Hero />
			<Projects />
			<Partners />
			<RecentActivities />
		</main>
	);
}
