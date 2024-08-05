'use client'
import { Button } from '@/components/ui/Button/Button'
import { ButtonSecond } from '@/components/ui/ButtonSecond.module/ButtonSecond'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './RentCars.module.scss'

export const RentCars = () => {
	const [carVariableSelected, setCarVariableSelected] = useState(0)
	return (
		<div className='mt-[13.542vw]'>
			{/* NAV LINKS  PC*/}
			<div className='hidden lg:flex justify-center gap-[2.604vw] mb-[2.604vw]'>
				{navLinks.map((nav, i) => (
					<div className='relative' key={i}>
						<p
							onClick={() => setCarVariableSelected(i)}
							className={`text-[2.083vw] cursor-pointer duration-300 ease-in-out lg:hover:text-white ${
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
			{/* NAV LINKS  MOBILE*/}
			<div className='block lg:hidden mb-[8.571vw]'>
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
									className={`text-[4.571vw] cursor-pointer duration-300 ease-in-out lg:hover:text-white w-fit ${
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
				<div className='flex flex-wrap gap-[1.389vw] lg:gap-[0.521vw]'>
					{cars.map((car, i) => (
						<div
							className={`relative w-[100vw] lg:w-[49.479vw] h-[66.667vw] lg:h-[28.646vw]`}
							key={i}
						>
							<Image src={car.img} fill alt='car' />
							<div
								className={`flex justify-between items-end px-[3.125vw] pb-[2.083vw] absolute size-full ${styles.carBackground}`}
							>
								<h2 className='text-[5vw] lg:text-[2.083vw]'>{car.title}</h2>
								<div className='w-[21.944vw] lg:w-[5.625vw]'>
									<ButtonSecond>Rent</ButtonSecond>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* VIEW ALL CARS BUTTON  */}
				<div
					className={
						'w-[88.889vw] lg:w-[18.229vw] mt-[8.333vw] lg:mt-[3.125vw]'
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
