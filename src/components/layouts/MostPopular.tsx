'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Button } from '../ui/Button/Button'
import { Input } from '../ui/Input'

export const MostPopular = () => {
	const [carSelected, setCarSelected] = useState(1)

	const popularWrapper = useRef(null)
	const carPreview = useRef(null)
	const sectionName = useRef(null)

	// LOCALE
	const MostPopularLocale = useTranslations('Index.MostPopular')
	const title = MostPopularLocale('title')
	const inputSearch = MostPopularLocale('inputSearch')
	const buttonViewAll = MostPopularLocale('button')

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)

		const t = gsap.timeline({
			scrollTrigger: {
				trigger: popularWrapper.current,
				start: 'top-=70%',
				end: 'top-=30%',
				scrub: false,
				// markers: true,
			},
		})
		gsap.utils.toArray<HTMLElement>('#car-variable').forEach((car) => {
			t.fromTo(
				car,
				{
					x: 400,
					opacity: 0,
				},
				{
					x: 0,
					opacity: 1,
					duration: 1.2,
					ease: 'back.inOut',
				},
				'-=0.8'
			)
		})

		gsap.fromTo(
			carPreview.current,
			{ y: 200, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				ease: 'back.in',
				scrollTrigger: {
					trigger: popularWrapper.current,
					start: 'top-=90%',
					end: 'top-=70%',
					scrub: 1.3,
				},
			}
		)

		gsap.fromTo(
			sectionName.current,
			{ x: 300 },
			{
				x: 0,
				ease: 'power3.inOut',
				duration: 1.2,
				scrollTrigger: {
					trigger: popularWrapper.current,
					start: 'top-=140%',
					end: 'top-=60%',
					scrub: 1.2,
				},
			}
		)
	}, [])
	return (
		<div
			ref={popularWrapper}
			className='flex justify-center items-start mt-[9.375vw]'
		>
			{/* PREVIEW CAR  */}
			<div ref={carPreview} className='relative w-[57.292vw] h-[44.792vw]'>
				<Image src={'/icons/mostPopularLamborghini.png'} fill alt='' />
			</div>
			<div className='flex flex-col gap-[2.604vw] ml-[3.125vw]'>
				{/* TITLE  */}
				<h2 ref={sectionName} className='text-[3.646vw] leading-[2.604vw]'>
					{title}
				</h2>
				{/* INPUT  */}
				<div className='w-[36.458vw]'>
					<Input placeholder={inputSearch} img />
				</div>
				{/* SELECT CAR  */}
				<div className='flex gap-[3.646vw]'>
					{/* INDICATOR  */}
					<div className='flex flex-col items-center w-[2.5vw]'>
						<div className='relative size-[2.396vw]'>
							<Image src={'/arrow.svg'} fill alt='' />
						</div>
						<div className='w-[0.208vw] h-[25.781vw] bg-[#2C2C2C]'></div>
						<div className='relative size-[2.396vw]'>
							<Image className='rotate-180' src={'/arrow.svg'} fill alt='' />
						</div>
					</div>
					{/* CARS & BUTTON  */}
					<div>
						<div>
							{cars.map((car, i) => (
								<div
									id='car-variable'
									onClick={() => setCarSelected(i)}
									className={`relative mb-[1.719vw] cursor-pointer`}
									key={i}
								>
									<div
										style={{
											transform: i !== carSelected ? `translateX(1.563vw)` : '',
										}}
										className='duration-300 ease-in-out'
									>
										<h2
											className={`text-[1.25vw] font-bold mb-[1.094vw] duration-200 ${
												carSelected === i
													? 'text-[#33B7BC]'
													: 'text-[#ffffff68]'
											}`}
										>
											{car.manufacture}
										</h2>
										<p
											className={`duration-200 text-[0.833vw] ${
												carSelected === i
													? 'text-[#049393]'
													: 'text-[#ffffff2e]'
											}`}
										>
											{car.model}
										</p>
										<div
											className={`duration-300 ease-in-out delay-200 ${
												carSelected === i ? 'opacity-100' : 'opacity-0'
											}`}
										>
											<div>
												<div className='w-full h-[0.104vw] bg-[#2C2C2C] mt-[0.521vw]'></div>
												<div className='w-[6vw] h-[0.104vw] bg-[#2C2C2C] rotate-45 ml-[-5.104vw] mt-[-2.188vw]'></div>
											</div>
											<div className='flex items-center justify-center size-[1.042vw] bg-[#33B7BC] rounded-full mt-[-5.208vw] ml-[-5.208vw]'>
												<div className='flex items-center justify-center size-[0.729vw] bg-white rounded-full'></div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* VIEW ALL BUTTON  */}
						<div className='w-[11.198vw]'>
							<Button>{buttonViewAll}</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const cars = [
	{ manufacture: 'Audi', model: 'Huracan EVO Spyder RS6' },
	{ manufacture: 'Lamborghini', model: 'Urus' },
	{ manufacture: 'Lamborghini', model: 'Huracan EVO Spyder ' },
	{ manufacture: 'Ferrari', model: 'Roma' },
	{ manufacture: 'Range Rover', model: 'Autobiography New 2022' },
]
