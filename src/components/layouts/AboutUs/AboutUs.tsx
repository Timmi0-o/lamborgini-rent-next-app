'use client'
import useShuffle from '@/components/hooks/useShuffle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useRef } from 'react'
import style from './AboutUs.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const AboutUs = () => {
	const aboutUsWrapper = useRef(null)
	const sectionTitle = useRef(null)
	const quote = useRef(null)
	const darkeningImg = useRef(null)
	const aboutMan = useRef(null)

	const textShuffle = useShuffle()

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)

		const t = gsap.timeline({
			scrollTrigger: {
				trigger: aboutUsWrapper.current,
				start: 'top-=60%',
				end: 'top-=30%',
				scrub: 1.4,
				markers: true,
			},
		})

		t.fromTo(
			sectionTitle.current,
			{ x: 300, scale: 0.8 },
			{
				x: 0,
				scale: 1,
				ease: 'power3.inOut',
			}
		)

		gsap.utils.toArray<HTMLHeadingElement>('.profit__title').map((title, i) => {
			t.to(
				aboutUsWrapper.current,
				{
					onStart: () => {
						textShuffle(`profit-title${i}`, title.textContent || '', 2.5, true)
					},
				},
				'<'
			)
		})

		gsap.utils
			.toArray<HTMLElement>('.profit__description')
			.map((item, indx: number) => {
				gsap.fromTo(
					item,
					{ x: 300, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.8,
						delay: indx !== 0 ? indx / 10 + 0.2 : 0,
						ease: 'back.inOut',
						scrollTrigger: {
							trigger: aboutUsWrapper.current,
							start: 'top-=30%',
							end: 'top-=10%',
							scrub: false,
							// markers: true,
						},
					}
				)
			})

		gsap.fromTo(
			quote.current,
			{ y: 200 },
			{
				y: 0,
				scrollTrigger: {
					trigger: aboutUsWrapper.current,
					start: 'top-=20%',
					end: 'top top',
					scrub: 1.4,
					// markers: true,
				},
			}
		)

		const t2 = gsap.timeline({
			scrollTrigger: {
				trigger: aboutUsWrapper.current,
				start: 'top+=20%',
				end: 'top+=50%',
				scrub: 1.4,
				// markers: true,
			},
		})

		t2.fromTo(
			darkeningImg.current,
			{ opacity: 1 },
			{
				opacity: 0,
			}
		)
		t2.fromTo(
			aboutMan.current,
			{ scale: 1 },
			{
				scale: 1.15,
			}
		)
	}, [])

	return (
		<div
			ref={aboutUsWrapper}
			className='relative mt-[6vw] xl:mt-[13.542vw] overflow-x-clip'
		>
			{/* BACKGROUND IMAGE  */}
			<div className='absolute w-[72.222vw] xl:w-[45.313vw] h-[66.667vw] xl:h-[41.667vw] right-[-37vw] xl:right-[-10.417vw] top-[-5vw] xl:top-[-8.333vw] -z-10'>
				<Image src={'/big-logo-background.svg'} fill alt='' />
			</div>
			{/* BLUR  */}
			<div
				className={
					style.glowing_div + ' absolute left-[-20.833vw] top-[-15.625vw]'
				}
			></div>
			{/* TITLE  */}
			<h1
				ref={sectionTitle}
				className='text-[11.111vw] xl:text-[8.333vw] text-center'
			>
				About Us
			</h1>
			{/* PROFITS  */}
			<div className='flex flex-wrap items-center justify-center gap-[11.111vw] md:gap-[7vw] xl:gap-[5.938vw] mt-[7.604vw]'>
				{profits.map((profit, i) => (
					<div key={i}>
						{/* TITLE  */}
						<div className='flex items-end'>
							<h2
								id={`profit-title${i}`}
								className={
									'profit__title text-[22.222vw] md:text-[15vw] xl:text-[6.771vw] text-[#161516] leading-[20vw] md:leading-[14vw] xl:leading-[4.688vw] mr-[2.778vw] xl:mr-0 ' +
									style.number
								}
							>
								{profit.title}
							</h2>
							<p className='text-[5.556vw] md:text-[3.5vw] xl:text-[1.25vw]'>
								{profit.subTitle}
							</p>
						</div>
						{/* DESCRIPTION  */}
						<p className='profit__description text-[4.167vw] md:text-[3.5vw] xl:text-[0.938vw] text-[#DBDBDB] mt-[6.944vw] xl:mt-[1.615vw] w-[88.889vw] xl:w-[20.625vw]'>
							{profit.description}
						</p>
					</div>
				))}
			</div>
			{/* QUOTE  */}
			<div ref={quote} className={'relative flex flex-col items-center'}>
				<div className='absolute left-[5vw] xl:left-[9.375vw] top-[24vw] md:top-[14vw] xl:top-[6.25vw] w-[12.222vw] xl:w-[5.208vw] h-[10.556vw] xl:h-[4.583vw]'>
					<Image src={'/marks.svg'} fill alt='mark' />
				</div>
				<p
					className={
						'relative mt-[29.444vw] md:mt-[20vw] xl:mt-[7.813vw] md:text-[3.5vw] text-[6.111vw] xl:text-[2.813vw] italic font-extrabold text-center w-[88.889vw] xl:w-[68.177vw] leading-[7.5vw] md:leading-[5vw] xl:leading-[3.385vw] ' +
						style.quote_glow +
						' ' +
						inter.className
					}
				>
					I’m with cars for over 18 years. My auto passion and attention to
					details will make your experience with us second to none. Guaranteed.
				</p>
				<div className='flex flex-col items-end w-[68.177vw] mt-[8.333vw] md:mt-[4vw] xl:mt-[1.563vw]'>
					<p className='text-[5vw] md:text-[3vw] xl:text-[1.25vw]'>
						Kirill Aliev, MBA
					</p>
					<p className='text-[3.889vw] md:text-[2vw] xl:text-[0.833vw] text-[#969696]'>
						CEO Trinity car rental boutique
					</p>
				</div>

				<div className='absolute bottom-[16vw] md:bottom-[5vw] xl:bottom-[3.125vw] right-[-1vw] xl:right-[9.375vw] w-[12.222vw] xl:w-[5.208vw] h-[10.556vw] xl:h-[4.583vw] rotate-180'>
					<Image src={'/marks.svg'} fill alt='mark' />
				</div>
			</div>
			<div className='relative overflow-clip w-[100vw] h-[56.406vw] mt-[10.938vw] xl:mt-[5.208vw] mx-auto'>
				<div
					ref={darkeningImg}
					className={'absolute size-full top-0 left-0 z-10 bg-[#000000bd]'}
				></div>
				<Image ref={aboutMan} src={'/icons/about-man.png'} fill alt='' />
			</div>
		</div>
	)
}

const profits = [
	{
		title: '8',
		subTitle: 'year',
		description:
			"We've come a long way from a 2-people company to winning at Webby's.",
	},
	{
		title: '72',
		subTitle: 'cars',
		description:
			"We've come a long way from a 2-people company to winning at Webby's.",
	},
	{
		title: '190',
		subTitle: 'people',
		description:
			"We've come a long way from a 2-people company to winning at Webby's.",
	},
]
