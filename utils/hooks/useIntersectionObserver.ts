import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
	threshold = 0.1,
	rootMargin = '0px',
	triggerOnce = false,
}: UseIntersectionObserverProps = {}) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [hasTriggered, setHasTriggered] = useState(false);
	const targetRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				const isElementIntersecting = entry.isIntersecting;

				if (triggerOnce && isElementIntersecting && !hasTriggered) {
					setHasTriggered(true);
					setIsIntersecting(true);
					return;
				}

				if (!triggerOnce) {
					setIsIntersecting(isElementIntersecting);
				}
			},
			{ threshold, rootMargin }
		);

		const currentTarget = targetRef.current;
		if (currentTarget) {
			observer.observe(currentTarget);
		}

		return () => {
			if (currentTarget) {
				observer.unobserve(currentTarget);
			}
		};
	}, [threshold, rootMargin, triggerOnce, hasTriggered]);

	return { ref: targetRef, isIntersecting };
};
