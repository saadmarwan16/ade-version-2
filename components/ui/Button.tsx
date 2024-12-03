import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
	href?: string;
	children: React.ReactNode;
}

export function Button({
	variant = 'primary',
	href,
	children,
	...props
}: ButtonProps) {
	const baseStyles =
		'px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all';
	const variants = {
		primary:
			'group bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg hover:shadow-xl',
		secondary: 'text-white border-2 border-white/20 hover:bg-white/10',
	};

	if (href) {
		return (
			<Link href={href} className={`${baseStyles} ${variants[variant]}`}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} className={`${baseStyles} ${variants[variant]}`}>
			{children}
		</button>
	);
}
