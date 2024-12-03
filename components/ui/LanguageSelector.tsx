'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
	code: string;
	name: string;
	flag: string;
}

const languages: Language[] = [
	{ code: 'en', name: 'English', flag: '🇺🇸' },
	{ code: 'fr', name: 'Français', flag: '🇫🇷' },
	{ code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
];

export function LanguageSelector() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedLang, setSelectedLang] = useState(languages[0]);
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

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className='relative' ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 px-3 py-1.5 transition-all hover:from-indigo-100 hover:to-purple-100'
			>
				<span className='text-base'>{selectedLang.flag}</span>
				<span className='bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-lg font-medium text-transparent'>
					{selectedLang.code.toUpperCase()}
				</span>
				<ChevronDown
					className={`h-4 w-4 text-indigo-600 transition-transform ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{/* Dropdown Menu */}
			<div
				className={`absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-200 ${
					isOpen
						? 'translate-y-0 opacity-100'
						: 'pointer-events-none translate-y-2 opacity-0'
				}`}
			>
				{languages.map((lang) => (
					<button
						key={lang.code}
						onClick={() => {
							setSelectedLang(lang);
							setIsOpen(false);
						}}
						className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-gray-50 ${
							selectedLang.code === lang.code ? 'bg-indigo-50' : ''
						}`}
					>
						<span className='text-lg'>{lang.flag}</span>
						<span
							className={`font-medium ${
								selectedLang.code === lang.code
									? 'text-indigo-600'
									: 'text-gray-700'
							}`}
						>
							{lang.name}
						</span>
					</button>
				))}
			</div>
		</div>
	);
}
