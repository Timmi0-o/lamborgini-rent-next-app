'use client'
import { Button } from '@/components/ui/Button/Button'
import { ButtonSecond } from '@/components/ui/ButtonSecond/ButtonSecond'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useRef, useState } from 'react'
import 'swiper/css'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './RentCars.module.scss'

export const RentCars = () => {
	const [carVariableSelected, setCarVariableSelected] = useState(0)

	const rentWrapper = useRef(null)

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger)

		const t = gsap.timeline({
			scrollTrigger: {
				trigger: rentWrapper.current,
				start: 'top-=70%',
				end: 'top-=30%',
				scrub: false,
				// markers: true,
			},
		})

		gsap.utils.toArray<HTMLElement>('#navLinks').map((nav) => {
			t.fromTo(
				nav,
				{ x: 300, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1.2,
					ease: 'back.inOut',
				},
				'-=0.8'
			)
		})

		gsap.utils.toArray<HTMLElement>('#cars').map((nav, indx) => {
			t.fromTo(
				nav,
				{ y: 300, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					delay: `${indx !== 0 ? indx / 10 + 0.2 : 0}`,
					ease: 'back.inOut',
				},
				'<'
			)
		})
	})
	return (
		<div ref={rentWrapper} className='mt-[8vw] xl:mt-[13.542vw]'>
			{/* NAV LINKS  PC*/}
			<div className='hidden xl:flex justify-center gap-[2.604vw] mb-[2.604vw]'>
				{navLinks.map((nav, i) => (
					<div id='navLinks' className='relative' key={i}>
						<p
							onClick={() => setCarVariableSelected(i)}
							className={`text-[2.083vw] cursor-pointer duration-300 ease-in-out xl:hover:text-white ${
								carVariableSelected === i ? '' : 'text-[#414141]'
							}`}
						>
							{nav}
						</p>
						<div
							className={`absolute top-[60%] -z-10 duration-300 ease-in-out -rotate-[1deg] ${
								carVariableSelected === i ? 'w-full' : 'w-0'
							}  h-[0.781vw] bg-[#33B7BC]`}
						></div>
					</div>
				))}
			</div>
			{/* NAV LINKS  MOBILE */}
			<div className='flex justify-center xl:hidden mb-[8.571vw]'>
				<Swiper
					slidesPerView='auto'
					spaceBetween={30}
					modules={[Mousewheel, FreeMode]}
					mousewheel={{ forceToAxis: true }}
					freeMode={{ enabled: true, sticky: false }}
				>
					{navLinks.map((nav, i) => (
						<SwiperSlide className='!w-fit' key={i}>
							<div className='relative' key={i}>
								<p
									onClick={() => setCarVariableSelected(i)}
									className={`text-[4.571vw] md:text-[3vw] cursor-pointer duration-300 ease-in-out xl:hover:text-white w-fit ${
										carVariableSelected === i ? '' : 'text-[#414141]'
									}`}
								>
									{nav}
								</p>
								<div
									className={`absolute top-[60%] -z-10 duration-300 ease-in-out -rotate-[1deg] ${
										carVariableSelected === i ? 'w-full' : 'w-0'
									}  h-[1.429vw] bg-[#33B7BC]`}
								></div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* CARS & BUTTON VIEW  */}
			<div className='flex flex-col items-center'>
				{/* CARS  */}
				<div className='flex flex-wrap gap-[1.389vw] md:gap-[1vw] xl:gap-[0.521vw]'>
					{cars.map((car, i) => (
						<div
							id='cars'
							className={`relative w-[100vw] md:w-[49vw] xl:w-[49.479vw] h-[66.667vw] md:h-[35vw] xl:h-[28.646vw]`}
							key={i}
						>
							<Image src={car.img} fill alt='car' />
							<div
								className={`flex justify-between items-end px-[3.125vw] pb-[2.083vw] absolute size-full ${styles.carBackground}`}
							>
								<h2 className='text-[5vw] md:text-[2.5vw] xl:text-[2.083vw]'>
									{car.title}
								</h2>
								<div className='w-[21.944vw] md:w-[15vw] xl:w-[5.625vw]'>
									<ButtonSecond>Rent</ButtonSecond>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* VIEW ALL CARS BUTTON  */}
				<div
					className={
						'w-[88.889vw] md:w-[40vw] xl:w-[18.229vw] mt-[8.333vw] xl:mt-[3.125vw]'
					}
				>
					<Button>View all</Button>
				</div>
			</div>
		</div>
	)
}

const navLinks = ['Special Offer', 'New car', 'Most popular', 'Daily']

const cars = [
	{ img: '/icons/Lamborghini Urus.png', title: 'Lamborghini Urus' },
	{ img: '/icons/Ferrari Roma.png', title: 'Ferrari Roma' },
	{ img: '/icons/Rolls-Royce Ghost.png', title: 'Rolls-Royce Ghost' },
	{ img: '/icons/Porsche 911 Turbo S.png', title: 'Porsche 911 Turbo S' },
]
