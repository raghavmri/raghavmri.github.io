import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function LanguagesKnown() {
	const languages = [
		{
			name: 'Tamil',
			proficiency: 'Native',
			icon: '/language-icons/tamil.png',
			alt: 'India flag icon',
			funnyNote: 'Fluent-aa pesuven 🤌🏽',
		},
		{
			name: 'Saurashtra',
			proficiency: 'Native',
			icon: '/language-icons/saurashtra.png',
			alt: 'Language icon',
			funnyNote: 'Only we understand us 🌀',
		},
		{
			name: 'English',
			proficiency: 'Advanced',
			icon: '/language-icons/english.png',
			alt: 'UK flag icon',
			funnyNote: 'Fluent until grammar attacks ⚔️',
		},
		{
			name: 'French',
			proficiency: 'Learning',
			icon: '/language-icons/french.png',
			alt: 'France flag icon',
			funnyNote: 'Oui oui… croissant? 🥐',
		},
		{
			name: 'Telugu',
			proficiency: 'Learning',
			icon: '/language-icons/telugu.png',
			alt: 'India flag icon',
			funnyNote: 'Baagane vundi... I think? 🤔',
		},
	];

	return (
		<section className='w-full py-20 text-white'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Languages Known
						</h2>
						<p className='max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							A list of languages I speak and my proficiency level in each.
						</p>
					</div>
				</div>

				<div className='mx-auto flex flex-wrap justify-center gap-10 py-12 max-w-6xl'>
					{languages.map((lang, index) => (
						<div
							key={index}
							className='relative flex flex-col gap-3 p-4 pt-10 rounded-xl bg-white/10 transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 w-full max-w-xs'
						>
							{/* Cloud badge */}
							<div className='absolute -top-6 left-1/2 transform -translate-x-1/2'>
								<div className='px-4 py-1 bg-white text-black rounded-full text-xs font-semibold shadow-md flex items-center gap-1'>
									<svg
										className='w-4 h-4 text-black'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path d='M10 4a4 4 0 00-3.464 6.032A3 3 0 0010 16h6a3 3 0 001-5.83A4 4 0 0010 4z' />
									</svg>
									{lang.funnyNote}
								</div>
							</div>

							{/* Language card */}
							<div className='flex items-center justify-between gap-3'>
								<div className='flex items-center gap-3'>
									<Image
										src={lang.icon || '/placeholder.svg'}
										width={32}
										height={32}
										alt={lang.alt}
										className='rounded-full object-cover'
									/>
									<h3 className='text-lg font-semibold'>{lang.name}</h3>
								</div>
								<Badge variant='secondary' className='text-sm px-2 py-1'>
									{lang.proficiency}
								</Badge>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
