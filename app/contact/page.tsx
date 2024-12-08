'use client';

import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { ContactSection } from '@/components/contact/ContactSection';

export default function ContactPage() {
	return (
		<main className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
			<ContactHero />
			<div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16'>
					<ContactInfo />
					<SocialLinks />
				</div>
			</div>
			<ContactSection />
		</main>
	);
}
