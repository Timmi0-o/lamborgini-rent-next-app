'use client'
import { ButtonSecond } from '@/components/ui/ButtonSecond.module/ButtonSecond'
import Image from 'next/image'
import { useState } from 'react'
import styles from './RentCars.module.scss'

export const RentCars = () => {
	const [carVariableSelected, setCarVariableSelected] = useState(0)
	return (
		<div className='mt-[260px]'>
			{/* NAV LINKS  */}
			<div className='flex justify-center gap-[50px] mb-[50px]'>
				{navLinks.map((nav, i) => (
					<div className='relative' key={i}>
						<p
							onClick={() => setCarVariableSelected(i)}
							className={`text-[40px] cursor-pointer duration-300 ease-in-out lg:hover:text-white ${
								carVariableSelected === i ? '' : 'text-[#414141]'
							}`}
						>
							{nav}
						</p>
						<div
							className={`absolute top-[60%] -z-10 duration-300 ease-in-out -rotate-[1deg] ${
								carVariableSelected === i ? 'w-full' : 'w-0'
							}  h-[15px] bg-[#33B7BC]`}
						></div>
					</div>
				))}
			</div>
			{/* CARS & BUTTON VIEW  */}
			<div className='flex flex-col items-center'>
				{/* CARS  */}
				<div className='flex flex-wrap gap-[10px]'>
					{cars.map((car, i) => (
						<div className={`relative w-[950px] h-[550px]`} key={i}>
							<Image src={car.img} fill alt='car' />
							<div
								className={`flex justify-between items-end px-[60px] pb-[40px] absolute size-full ${styles.carBackground}`}
							>
								<h2 className='text-[40px]'>{car.title}</h2>
								<div className='w-[108px]'>
									<ButtonSecond title='Rent' />
								</div>
							</div>
						</div>
					))}
				</div>
				{/* VIEW ALL CARS BUTTON  */}
				<button
					className={'w-[350px] h-[54px] bg-[#33B7BC] rounded-[10px] mt-[60px]'}
				>
					View all
				</button>
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
