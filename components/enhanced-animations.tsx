'use client';

import type React from 'react';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function FloatingElements() {
	return (
		<div className='fixed inset-0 pointer-events-none overflow-hidden'>
			{[...Array(15)].map((_, i) => (
				<motion.div
					key={i}
					className='absolute'
					animate={{
						x: [0, 100, -50, 0],
						y: [0, -100, 50, 0],
						rotate: [0, 180, 360],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: 10 + i * 2,
						repeat: Number.POSITIVE_INFINITY,
						delay: i * 0.5,
					}}
					style={{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}}
				>
					<div className='w-1 h-1 bg-white/20 rounded-full' />
				</motion.div>
			))}
		</div>
	);
}

export function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = (window.scrollY / totalHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.div
			className='fixed top-0 left-0 h-1 bg-white z-50'
			style={{ width: `${scrollProgress}%` }}
			initial={{ width: 0 }}
			animate={{ width: `${scrollProgress}%` }}
			transition={{ duration: 0.1 }}
		/>
	);
}

export function ParallaxText({
	children,
	speed = 0.5,
}: {
	children: React.ReactNode;
	speed?: number;
}) {
	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setOffsetY(window.pageYOffset);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.div
			style={{ transform: `translateY(${offsetY * speed}px)` }}
			transition={{ type: 'spring', stiffness: 100 }}
		>
			{children}
		</motion.div>
	);
}
