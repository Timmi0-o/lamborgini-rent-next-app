'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'
import style from './Advantage.module.scss'

export const Advantages = () => {
	const sectionTitle = useRef(null)
	const advantageWrapper = useRef(null)

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)

		const t = gsap.timeline({
			scrollTrigger: {
				trigger: advantageWrapper.current,
				start: 'top-=110%',
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
			},
			'<'
		)

		gsap.utils.toArray<HTMLElement>('.advantage__items').map((nav, indx) => {
			gsap.fromTo(
				nav,
				{ y: 300, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					delay: `${indx !== 0 ? (indx / 10) * 2 : 0}`,
					ease: 'back.inOut',
					scrollTrigger: {
						trigger: advantageWrapper.current,
						start: 'top-=50%',
						end: 'top-=20%',
						scrub: false,
						markers: true,
					},
				}
			)
		})
	}, [])

	return (
		<div
			ref={advantageWrapper}
			className='flex flex-col items-center mt-[13.542vw]'
		>
			{/* TITLE  */}
			<h1
				ref={sectionTitle}
				className='text-[11.111vw] xl:text-[8.333vw] text-center mb-[6.302vw]'
			>
				Advantages
			</h1>
			{/* ADVANTAGES PC */}
			<div className='hidden md:flex flex-wrap'>
				{advantagesDescription.map((title, i) => (
					<div
						className='advantage__items relative w-[49.5vw] xl:w-[33.073vw] h-[35vw] xl:h-[23.958vw] border-[0.052vw] border-[#272727]'
						key={i}
					>
						<div className='flex items-end absolute size-full top-0 left-0 z-20'>
							<p className='text-[1.25vw] mb-[2.604vw] ml-[3.125vw]'>{title}</p>
						</div>
						<Image
							src={`/icons/Advantages${i + 1}.png`}
							fill
							alt='Advantages'
						/>
					</div>
				))}
			</div>
			{/* ADVANTAGES MOBILE */}
			<div className='relative md:hidden flex flex-col justify-center w-[88.889vw] h-[119.861vw]'>
				<div
					className={style.glowing_div + ' absolute left-[-50vw] top-[20vw]'}
				></div>
				<div
					className={
						'absolute size-full top-0 left-0 border-[0.278vw] border-[#434343] rounded-[2.778vw] ' +
						style.mobile_container_wrapper
					}
				></div>
				{advantagesDescription.slice(0, 4).map((title, i) => (
					<div
						className='flex gap-[2vw] items-center mb-[6.722vw] ml-[9.722vw]'
						key={i}
					>
						<div className='flex justify-center items-center size-[3.056vw] bg-[#33B7BC] rounded-full'>
							<div className='size-[1.944vw] rounded-full bg-white'></div>
						</div>
						<p className='text-[4.8vw] leading-[8.333vw]'>{title}</p>
					</div>
				))}
			</div>
		</div>
	)
}

const advantagesDescription = [
	'40+ unique cars for\n rent from our fleet',
	'Delivery and return\n of cars in Dubai 24/7',
	'Insurance without a\n deductible for each car',
	'No video or audio\n recording in the car',
	'24/7 technical support',
	'All models have a premium package',
]
