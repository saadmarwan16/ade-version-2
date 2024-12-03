'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Avatar } from '../ui/Avatar';
import { LanguageSelector } from '../ui/LanguageSelector';

const navLinks = [
	{ href: '/activities', label: 'Activities' },
	{ href: '/galleries', label: 'Galleries' },
	{ href: '/about', label: 'Know me' },
];

export function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	// Handle click outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	// Handle escape key
	useEffect(() => {
		function handleEscapeKey(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscapeKey);
		}

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [isOpen]);

	return (
		<>
			<nav className='fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-20 items-center justify-between'>
						<Link
							href='/'
							className='flex cursor-pointer items-center gap-3 transition hover:scale-105'
						>
							<Avatar size='md' />
							<span className='bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent lg:text-3xl'>
								ADEBAYO
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div className='hidden items-center gap-8 lg:flex'>
							{navLinks.map(({ href, label }) => (
								<Link
									key={label}
									href={href}
									className={`text-lg font-medium text-gray-600 transition-colors hover:text-indigo-600 lg:text-xl ${
										pathname === href ? 'text-indigo-600' : ''
									}`}
								>
									{label}
								</Link>
							))}
							<LanguageSelector />
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-indigo-600 lg:hidden'
							aria-label={isOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={isOpen}
							aria-controls='mobile-menu'
						>
							{isOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
					isOpen
						? 'visible opacity-100'
						: 'pointer-events-none invisible opacity-0'
				}`}
				aria-hidden='true'
			/>

			{/* Mobile Menu */}
			<div
				ref={menuRef}
				id='mobile-menu'
				className={`fixed bottom-0 right-0 top-0 z-50 w-[280px] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
				role='dialog'
				aria-modal='true'
				aria-label='Navigation menu'
			>
				<div className='flex h-20 items-center justify-end border-b border-gray-100 px-4'>
					<button
						onClick={() => setIsOpen(false)}
						className='rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-indigo-600'
						aria-label='Close menu'
					>
						<X className='h-6 w-6' />
					</button>
				</div>

				<div className='space-y-3 px-4 py-6'>
					{navLinks.map(({ href, label }) => (
						<Link
							key={label}
							href={href}
							onClick={() => setIsOpen(false)}
							className={`block rounded-lg px-4 py-3 text-lg font-medium transition-all ${
								pathname === href
									? 'bg-indigo-50 text-indigo-600 shadow-sm'
									: 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
							}`}
						>
							{label}
						</Link>
					))}
					<div className='px-4 py-3'>
						<LanguageSelector />
					</div>
				</div>
			</div>
		</>
	);
}
