'use client'
import { Section } from '@/components/ui/Section'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { Menu } from './Menu'

export const Header = () => {
	const locale = useLocale()
	const path = usePathname()
	const router = useRouter()
	const [isMenu, setIsMenu] = useState(false)

	const cityText = useRef(null)
	const nameSite = useRef(null)
	const headerGradient = useRef(null)
	const header = useRef(null)

	// LOCALE
	const headerLocale = useTranslations('Header')
	const navLinks = headerLocale.raw('navLinks')
	const cityLinks = headerLocale.raw('city')
	const siteName = headerLocale('siteName')

	const [isLocaleList, setIsLocaleList] = useState(false)
	const [isCityList, setIsCityList] = useState(false)

	// INITIAL CITY
	const cityId = Number(localStorage.getItem('cityId'))
	const city = cityLinks[cityId]
	const [currentCity, setCurrentCity] = useState(city || cityLinks[0])

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)
		gsap.fromTo(
			cityText.current,
			{
				y: '10vw',
				opacity: 0,
			},
			{
				y: 0,
				delay: 0.2,
				opacity: 1,
				duration: 1.5,
				ease: 'expo.out',
			}
		)

		gsap.fromTo(
			headerGradient.current,
			{ backgroundColor: 'black', opacity: 1 },
			{ backgroundColor: 'transparent', duration: 2 }
		)

		const timeline = gsap.timeline()

		timeline.fromTo(
			cityText.current,
			{
				ease: 'expo.inOut',
				scale: 1,
				y: '0vw',
			},
			{
				scrollTrigger: {
					trigger: header.current,
					start: 'top-=40%',
					end: () => {
						const screenWidth = window.innerWidth
						if (screenWidth >= 1600) {
							return 'bottom'
						} else if (screenWidth >= 1024) {
							return 'bottom-=20%'
						} else {
							return 'bottom-=10%'
						}
					},
					scrub: 0.6,
					// markers: true,
				},
				ease: 'expo.inOut',
				scale: () => {
					const screenWidth = window.innerWidth
					if (screenWidth >= 750) {
						return 2
					} else {
						return 1.1
					}
				},
				y: () => {
					const { innerWidth: w, innerHeight: h } = window
					const conditions = [
						{ cond: w >= 1600 && h >= 900, value: '15vw' },
						{ cond: w >= 1200 && h > 900, value: '35vw' },
						{ cond: w >= 1200 && h < 850, value: '30vw' },
						{ cond: w >= 1024 && h >= 1200, value: '65vw' },
						{ cond: w >= 1024 && h >= 600, value: '15vw' },
						{ cond: w >= 770 && h < 600, value: '75vw' },
					]
					for (const { cond, value } of conditions) {
						if (cond) return value
					}
					return '55vw'
				},
			}
		)

		timeline.fromTo(
			nameSite.current,
			{
				opacity: 1,
				marginTop: '0vw',
			},
			{
				scrollTrigger: {
					trigger: header.current,
					start: 'top top',
					end: 'top+=100px',
					scrub: 1.4,
				},
				ease: 'circ.inOut',
				opacity: 0,
				marginTop: '10vw',
			}
		)

		gsap.fromTo(
			nameSite.current,
			{
				x: -50,
				opacity: 0,
			},
			{
				x: 0,
				delay: 1,
				opacity: 1,
				duration: 0.8,
				ease: 'expo.inOut',
			}
		)
	})

	return (
		<Section>
			<header ref={header} className={`relative h-[100vh]`}>
				{/* HEADER VIDEO  */}
				<div
					ref={headerGradient}
					className='headerGradient absolute top-0 left-0 z-10 size-full'
				></div>
				<video
					autoPlay
					loop
					muted
					controls={false}
					playsInline
					className='absolute w-full h-[100vh] object-cover'
				>
					<source src='/video/lamboAI.mov' type='video/mp4' />
				</video>
				{/* HEADER INFO  */}
				<div className='absolute top-0 left-0 size-full z-30'>
					{/* HEADER NAVIGATION && LOGO  */}
					<div className='flex items-center justify-between pt-[8.571vw] md:pt-[0px] xl:pt-[2.083vw] px-[3.125vw]'>
						{/* LEFT NAVIGATE  */}
						<div className='flex'>
							{/* HAMBURGER  */}
							<div
								onClick={() => setIsMenu(true)}
								className='mr-[3.021vw] cursor-pointer'
							>
								<div className='w-[15.714vw] md:w-[6vw] xl:w-[3.177vw] h-[0.052vw] bg-white mb-[2vw] md:mb-[1vw] xl:mb-[0.365vw] rounded-ee-full'></div>
								<div className='w-[15.714vw] md:w-[6vw] xl:w-[3.177vw] h-[0.052vw] bg-white translate-x-[0.521vw] rounded-ee-full'></div>
							</div>
							{/* LEFT LIST   */}
							<div className='hidden md:flex items-center gap-[2.083vw]'>
								{navLinks.map((nav: string, i: number) => (
									<span
										className='md:text-[1.5vw] xl:text-[0.781vw] text-[#FEFEFE] cursor-pointer'
										key={i}
									>
										{nav}
									</span>
								))}
							</div>
						</div>
						{/* LOGO  */}
						<div className='flex flex-col items-center w-[14.286vw] md:w-[10vw] xl:w-[7.656vw] mr-[5.208vw]'>
							<div className='relative w-full h-[13.429vw] xl:h-[7.24vw]'>
								<Image src={' /logo.svg'} fill alt='' />
							</div>
							<div className='hidden xl:relative w-full h-[0.573vw]'>
								<Image src={'/subLogo.svg'} fill alt='' />
							</div>
						</div>
						{/* RIGHT NAVIGATE  */}
						<div className='flex gap-[3.125vw]'>
							<div className='hidden md:flex items-center gap-[3.125vw]'>
								{/* PHONE  */}
								<span className='md:text-[1.5vw] xl:text-[0.833vw] text-[#FEFEFE]'>
									+971 58 590 7875
								</span>
								{/* CITY  */}
								<div className='relative'>
									<div
										onClick={() => setIsCityList(!isCityList)}
										className='flex items-center gap-[2.667vw] md:gap-[0.977vw] xl:gap-[0.521vw]'
									>
										<span className='text-[3.714vw] md:text-[1.5vw] xl:text-[0.833vw] text-[#FEFEFE] cursor-pointer'>
											{currentCity}
										</span>
										<div
											className={`relative size-[2.667vw] md:size-[0.977vw] xl:size-[0.521vw] duration-200 ease-in-out ${
												isCityList ? 'rotate-180' : ''
											}`}
										>
											<Image src={'/arrow-list.svg'} fill alt='arrow-list' />
										</div>
									</div>
									{/* VARIABLE CITY  */}
									<div
										className={`absolute right-0 flex flex-col gap-[0.5vw] mt-[0.4vw] duration-500 ease-in-out border-[0.052vw] border-[#ffffff23] w-[14.688vw] xl:w-[9.792vw] h-[15.859vw] xl:h-[10.573vw] pt-[1.953vw] xl:pt-[1.302vw] pl-[1.953vw] xl:pl-[1.302vw] rounded-[1.094vw] xl:rounded-[0.729vw] bg-[#313131] ${
											isCityList ? '' : ' invisible mt-[-1vw] opacity-0'
										}`}
									>
										{cityLinks.map((city: string, i: number) => (
											<p
												onClick={() => {
													localStorage.setItem('cityId', `${i}`)
													setCurrentCity(city)
													setIsCityList(false)
												}}
												className='text-[3.714vw] md:text-[1.5vw] xl:text-[0.781vw] text-[#FEFEFE] cursor-pointer uppercase hover:text-[#33B7BC] p-[0.5vw] xl:p-[0.2vw] rounded-[0.5vw] xl:rounded-[0.2vw] duration-150 ease-linear'
												key={i}
											>
												{city}
											</p>
										))}
									</div>
								</div>
							</div>
							{/* LANGUAGE  */}
							<div className='relative'>
								<div
									onClick={() => setIsLocaleList(!isLocaleList)}
									className='flex items-center gap-[2.667vw] md:gap-[0.977vw] xl:gap-[0.521vw]'
								>
									<span className='text-[3.714vw] md:text-[1.5vw] xl:text-[0.833vw] text-[#FEFEFE] cursor-pointer'>
										{locale.toUpperCase()}
									</span>
									<div
										className={`relative size-[2.667vw] md:size-[0.977vw] xl:size-[0.521vw] duration-200 ease-in-out ${
											isLocaleList ? 'rotate-180' : ''
										}`}
									>
										<Image src={'/arrow-list.svg'} fill alt='arrow-list' />
									</div>
								</div>
								{/* VARIABLE LANGUAGE  */}
								<div
									className={`absolute flex flex-col gap-[0.5vw] mt-[0.4vw] duration-200 ease-in-out border-[0.052vw] border-white p-[2vw] xl:p-[0.5vw] rounded-[1vw] xl:rounded-[0.2vw] ${
										isLocaleList ? '' : ' invisible mt-[-0.4vw] opacity-0'
									}`}
								>
									{locals.map((lang, i) => (
										<p
											onClick={() =>
												router.replace(path.replace(path.split('/')[1], lang))
											}
											className='text-[3.714vw] md:text-[1.5vw] xl:text-[0.781vw] text-[#FEFEFE] cursor-pointer uppercase hover:bg-[#ffffff5c] p-[0.5vw] xl:p-[0.2vw] rounded-[0.5vw] xl:rounded-[0.2vw] duration-150 ease-linear'
											key={i}
										>
											{lang}
										</p>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* TITLE  */}
					<div className='flex flex-col items-center w-full mt-[60vw] sm:mt-[25vw] md:mt-[15vw] xl:mt-[12vw]'>
						<h1
							ref={cityText}
							className='text-[17.143vw] md:text-[10vw] xl:text-[6.25vw] font-medium'
						>
							{currentCity}
						</h1>
						<p
							ref={nameSite}
							className='text-[4.857vw] md:text-[2.5vw] xl:text-[1.667vw] font-normal opacity-100'
						>
							{siteName}
						</p>
					</div>
					{/* BOTTOM LINE  */}
					<div className='flex flex-col justify-center absolute bottom-0 left-[50%] translate-x-[-50%] w-[0.104vw]'>
						<div className='w-full h-[5.714vw] xl:h-[1.042vw] bg-[#33B7BC]'></div>
						<div className='w-full h-[11.429vw] xl:h-[2.083vw] bg-[#ffffff42]'></div>
					</div>
					{/* SOCIAL LINKS  */}
					<div className='flex gap-[4.857vw] md:gap-[3vw] xl:gap-[1.042vw] absolute bottom-[3.125vw] right-[3.125vw]'>
						<div className='flex items-center justify-center size-[11.429vw] md:size-[7vw] xl:size-[2.813vw] bg-[#34AADF] rounded-full cursor-pointer'>
							<div className='relative size-[6.286vw] md:size-[4.5vw] xl:size-[1.563vw]'>
								<Image src={'/telegram.svg'} fill alt='' />
							</div>
						</div>
						<div className='flex items-center justify-center size-[11.429vw] md:size-[7vw] xl:size-[2.813vw] bg-[#43D854] rounded-full cursor-pointer'>
							<div className='relative size-[6.286vw] md:size-[4.5vw] xl:size-[1.563vw]'>
								<Image src={'/whatsapp.svg'} fill alt='' />
							</div>
						</div>
					</div>
				</div>
			</header>
			<div>
				<Menu isShow={isMenu} setIsShow={setIsMenu} />
			</div>
		</Section>
	)
}

const locals = ['en', 'ru']
