'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import StatusBar from './status-bar';

export default function Navigation() {
	const [activeSection, setActiveSection] = useState('hero');
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);

	const navItems = [
		{ id: 'hero', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'tech', label: 'Tech' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'honors', label: 'Honors' },
		{ id: 'contact', label: 'Contact' },
	];

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Hide on scroll down, show on scroll up
			if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
			lastScrollY.current = currentScrollY;

			// Update active section
			const sections = navItems.map((item) => document.getElementById(item.id));
			const scrollPosition = currentScrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(navItems[i].id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: isVisible ? 0 : -120, opacity: isVisible ? 1 : 0 }}
				transition={{
					type: 'spring',
					stiffness: 200,
					damping: 30,
				}}
				className='fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto max-w-full'
			>
				<motion.div
					className='bg-black/60 hover:bg-black/70 border border-white/10 rounded-2xl sm:rounded-full px-2 py-2 sm:px-6 sm:py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-x-auto max-w-full transition-all duration-300'
					whileHover={{ scale: 1.02 }}
					transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				>
					<div className='flex items-center gap-1 sm:space-x-1 whitespace-nowrap min-w-max'>
						{navItems.map((item, index) => (
							<motion.button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className='relative px-2.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors rounded-full shrink-0'
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{activeSection === item.id && (
									<motion.div
										layoutId='activeSection'
										className='absolute inset-0 bg-white rounded-full'
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30,
										}}
									/>
								)}
								<span
									className={`relative z-10 ${
										activeSection === item.id ? 'text-black' : 'text-white/70'
									}`}
								>
									{item.label}
								</span>
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Decorative glow effect */}
				<motion.div
					className='absolute inset-0 -z-10 rounded-full bg-white/5 blur-xl'
					animate={{
						scale: [1, 1.1, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
			</motion.nav>
			<StatusBar />
		</>
	);
}
