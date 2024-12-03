'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
	title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.addEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.removeEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 overflow-y-auto'>
			<div className='fixed inset-0 bg-black/50 backdrop-blur-sm' />

			<div className='flex min-h-full items-center justify-center p-4'>
				<div
					ref={modalRef}
					className='relative w-full max-w-4xl transform rounded-2xl bg-white shadow-xl transition-all'
				>
					<div className='absolute right-4 top-4 z-10'>
						<button
							onClick={onClose}
							className='rounded-full bg-white/80 p-2 shadow-sm backdrop-blur-sm transition-colors hover:bg-white'
						>
							<X className='h-6 w-6 text-gray-500' />
						</button>
					</div>

					{title && (
						<div className='border-b border-gray-100 px-6 py-4'>
							<h2 className='text-2xl font-semibold text-gray-900'>{title}</h2>
						</div>
					)}

					<div className='p-6'>{children}</div>
				</div>
			</div>
		</div>
	);
}
