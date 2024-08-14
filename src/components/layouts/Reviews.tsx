'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Reviews = () => {
	const [reviewHover, setReviewHover] = useState<number | null>(null)

	const sectionTitle = useRef(null)
	const reviewWrapper = useRef(null)

	// LOCALE
	const reviewLocale = useTranslations('Index.Reviews')

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)

		const t = gsap.timeline({
			scrollTrigger: {
				trigger: reviewWrapper.current,
				start: () => {
					const { innerWidth: w, innerHeight: h } = window
					const conditions = [
						{ cond: w >= 1600 && h >= 900, value: 'top-=120%' },
						{ cond: w >= 1200 && h > 900, value: 'top-=120%' },
						{ cond: w >= 1200 && h < 850, value: 'top-=120%' },
						{ cond: w >= 1024 && h >= 1200, value: 'top-=300%' },
						{ cond: w >= 1024 && h >= 600, value: 'top-=120%' },
						{ cond: w >= 770 && h < 600, value: 'top-=120%' },
					]
					for (const { cond, value } of conditions) {
						if (cond) return value
					}
					return 'top-=320%'
				},
				end: 'top-=30%',
				scrub: 1.4,
				// markers: true,
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

		gsap.fromTo(
			'.reviews__item',
			{ y: 200, scale: 0.8, paddingLeft: 10, paddingRight: 10 },
			{
				y: 0,
				scale: 1,
				paddingLeft: 0,
				paddingRight: 0,
				ease: 'power3.inOut',
				scrollTrigger: {
					trigger: reviewWrapper.current,
					start: () => {
						const { innerWidth: w, innerHeight: h } = window
						const conditions = [
							{ cond: w >= 1600 && h >= 900, value: 'top-=60%' },
							{ cond: w >= 1200 && h > 900, value: 'top-=60%' },
							{ cond: w >= 1200 && h < 850, value: 'top-=60%' },
							{ cond: w >= 1024 && h >= 1200, value: 'top-=150%' },
							{ cond: w >= 1024 && h >= 600, value: 'top-=60%' },
							{ cond: w >= 800 && h >= 900, value: 'top-=160%' },
							{ cond: w >= 770 && h < 600, value: 'top-=60%' },
						]
						for (const { cond, value } of conditions) {
							if (cond) return value
						}
						return 'top-=240%'
					},
					end: 'top-=20%',
					scrub: 1.4,
					// markers: true,
				},
			}
		)
	}, [])

	return (
		<div
			ref={reviewWrapper}
			className='mt-[25vw] md:mt-[18vw] xl:mt-[13.542vw]'
		>
			{/* TITLE  */}
			<h1
				ref={sectionTitle}
				className='text-[11.111vw] xl:text-[8.333vw] font-medium text-center mb-[6.25vw]'
			>
				{reviewLocale('title')}
			</h1>
			{/* REVIEWS  PC*/}
			<div className='hidden xl:flex gap-[0.313vw] justify-center'>
				{Array.from({ length: 4 }).map((_, i) => (
					<div
						onMouseMove={() => setReviewHover(i)}
						onMouseOut={() => setReviewHover(null)}
						className='reviews__item relative w-[24.479vw] h-[38.542vw] '
						key={i}
					>
						<div
							className={`flex justify-center items-center absolute size-full top-0 left-0 z-10 duration-200 ease-in-out ${
								reviewHover === i ? 'bg-[#0000008a]' : 'opacity-0'
							}`}
						>
							{/* PLAY BUTTON  */}
							<div className='flex justify-center items-center size-[4.167vw] bg-[#33B7BC] rounded-full border-[0.208vw] border-[#71bdc0a7] cursor-pointer'>
								<div className='relative w-[1.042vw] h-[1.667vw]'>
									<Image src={'/play.svg'} fill alt='play' />
								</div>
							</div>
						</div>
						<Image
							className='rounded-[0.208vw]'
							src={`/icons/review${i + 1}.png`}
							fill
							alt=''
						/>
					</div>
				))}
			</div>
			{/* REVIEWS  MOBILE*/}
			<div className='flex flex-col xl:hidden item-center'>
				<div className='flex justify-center'>
					<Swiper
						onSlideChange={(swiper) => setReviewHover(swiper.activeIndex)}
						onActiveIndexChange={(swiper) => setReviewHover(swiper.activeIndex)}
						slidesPerView='auto'
						spaceBetween={4}
						modules={[Mousewheel]}
						mousewheel={{ forceToAxis: true }}
					>
						{Array.from({ length: 4 }).map((_, i) => (
							<SwiperSlide className='!w-fit reviews__item' key={i}>
								<div
									onMouseMove={() => setReviewHover(i)}
									onMouseOut={() => setReviewHover(null)}
									className='relative w-[55.625vw] h-[86.563vw] md:w-[45vw] md:h-[70vw] '
									key={i}
								>
									<div
										className={`flex justify-center items-center absolute size-full top-0 left-0 z-10 duration-200 ease-in-out ${
											reviewHover === i ? 'bg-[#0000008a]' : 'opacity-0'
										}`}
									>
										{/* PLAY BUTTON  */}
										<div className='flex justify-center items-center size-[14.167vw] md:size-[3vw] bg-[#33B7BC] rounded-full border-[0.208vw] border-[#71bdc0a7] cursor-pointer'>
											<div className='relative w-[4vw] h-[4.1vw] xl:w-[1.042vw] xl:h-[1.667vw]'>
												<Image src={'/play.svg'} fill alt='play' />
											</div>
										</div>
									</div>
									<Image
										className='rounded-[0.208vw]'
										src={`/icons/review${i + 1}.png`}
										fill
										alt=''
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='flex gap-[5vw] md:gap-[3vw] mt-[6.25vw] mx-auto'>
					<div className='relative size-[13.125vw] md:size-[8vw]'>
						<Image src={'/next-slide.svg'} fill alt='' />
					</div>
					<div className='relative size-[13.125vw] md:size-[8vw] rotate-180'>
						<Image src={'/next-slide.svg'} fill alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
