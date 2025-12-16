'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const socialLinks = [
		{
			name: 'Email',
			icon: Mail,
			href: 'mailto:raghav@gamicgo.xyz',
			color: 'hover:text-white',
			description: 'raghav@gamicgo.xyz',
			useIcon: true, // Keep using Lucide icon for email
		},
		{
			name: 'GitHub',
			logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
			href: 'https://github.com/raghavmri',
			color: 'hover:text-white',
			description: '@raghavmri',
			brandColor: true,
		},
		{
			name: 'Twitter',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
			href: 'https://twitter.com/raghav_mri',
			color: 'hover:text-white',
			description: '@raghav_mri',
			brandColor: true,
		},
		{
			name: 'LinkedIn',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
			href: 'https://www.linkedin.com/in/raghav-mrituanjaya-93aa421a6/',
			color: 'hover:text-white',
			description: 'Raghav Mrituanjaya',
			brandColor: true,
		},
		{
			name: 'Instagram',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
			href: 'https://instagram.com/raghavmri',
			color: 'hover:text-white',
			description: '@raghavmri',
			brandColor: true,
		},
	];

	return (
		<section id='contact' className='py-20 relative'>
			<div className='container mx-auto px-6' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className='text-center mb-16'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Let&apos;s Connect
					</h2>
					<div className='w-24 h-1 bg-white mx-auto mb-8'></div>
					<p className='text-white/80 text-lg max-w-2xl mx-auto'>
						I&apos;m always open to discussing new opportunities, creative projects,
						or just having a chat about technology!
					</p>
				</motion.div>

				<div className='max-w-4xl mx-auto'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8'
					>
						<div className='flex items-center justify-center space-x-2 mb-6'>
							<MapPin className='w-5 h-5 text-white' />
							<span className='text-white/80'>
								🏝️ Chennai Roots, Global Reach — Ping Me Anywhere, Anytime 🌐💬
							</span>
						</div>

						<div className='text-center mb-8'>
							<p className='text-white/70 text-lg leading-relaxed'>
								Whether you want to discuss trading strategies, collaborate on
								fintech projects, or explore opportunities in algorithmic trading,
								I&apos;d love to connect. Let&apos;s build the future of finance
								together!
							</p>
						</div>

						<div className='flex justify-center'>
							<Button
								size='lg'
								className='bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full'
								asChild
							>
								<a href='mailto:raghav@gamicgo.xyz'>
									<Mail className='w-5 h-5 mr-2' />
									Send me an email
								</a>
							</Button>
						</div>
					</motion.div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{socialLinks.map((link, index) => (
							<motion.a
								key={link.name}
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
								className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group ${link.color}`}
							>
								<div className='flex items-center space-x-4'>
									{link.useIcon ? (
										<link.icon className='w-6 h-6 text-white/70 group-hover:scale-110 transition-transform' />
									) : (
										<div className='w-6 h-6 relative group-hover:scale-110 transition-transform'>
											<Image
												src={(link.logo as string) || ''}
												alt={`${link.name} logo`}
												width={24}
												height={24}
												className={`transition-all duration-300 grayscale group-hover:grayscale-0 ${
													link.name === 'GitHub' ? 'invert' : ''
												}`}
												unoptimized
											/>
										</div>
									)}
									<div>
										<h3 className='font-medium text-white group-hover:text-current transition-colors'>
											{link.name}
										</h3>
										<p className='text-white/60 text-sm'>{link.description}</p>
									</div>
								</div>
							</motion.a>
						))}
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					transition={{ duration: 0.8, delay: 1 }}
					className='text-center mt-16 pt-8 border-t border-white/10'
				>
					<p className='text-white/40 text-sm'>
						© {new Date().getFullYear()} Raghav Mrituanjaya.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
