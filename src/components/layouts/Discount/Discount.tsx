'use client'
import Image from 'next/image'
import { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Button } from '../../ui/Button/Button'
import { Input } from '../../ui/Input'
import style from './Discount.module.scss'

export const Discount = () => {
	const [carVariableSelected, setCarVariableSelected] = useState(0)
	return (
		<div className='relative w-full justify-center'>
			{/* GLOWS  */}
			<div
				className={'absolute left-[-30%] top-[-20%] ' + style.glowing_left}
			></div>
			<div
				className={`absolute right-[20%] top-[-50%] ` + style.glowing_right}
			></div>
			{/* DISCOUNT COUPON & SQUAD PLUS */}
			<div className='relative w-[88.889vw] xl:w-[60.938vw] h-[100vw] md:h-[50vw] xl:h-[21.198vw] mx-auto xl:mb-[15.625vw]'>
				{/* DISCOUNT COUPON  */}
				<div className='relative overflow-clip flex flex-col items-center justify-center mt-[22.222vw] md:mt-[17vw] xl:mt-[13.542vw] size-full rounded-ss-[13.611vw] md:rounded-ss-[9vw]  xl:rounded-ss-[6.719vw] rounded-es-[2.778vw] xl:rounded-es-[1.51vw] rounded-e-[2.778vw]  xl:rounded-e-[1.51vw] bg-[#1E1D1E]'>
					{/* CIRCLE RIGHT  */}
					<div className='absolute right-0 top-0 w-[13.75vw] h-[18.333vw]'>
						<Image src={'/discount-circle-right.svg'} fill alt='' />
					</div>
					{/* CIRCLE LEFT  */}
					<div className='absolute left-[2%] bottom-[-30%] w-[18.802vw] h-[25vw] opacity-35'>
						<Image src={'/discount-circle-left.svg'} fill alt='' />
					</div>
					<div className='relative z-20 flex flex-col items-center'>
						{/* TITLE PC  */}
						<h2 className='hidden md:block md:text-[4vw] xl:text-[2.396vw]'>
							Get a discount of up to <span className='font-bold'>60%</span>
						</h2>
						{/* TITLE MOBILE  */}
						<h2 className='block md:hidden text-[6.667vw]'>
							Get a discount <br /> of up to{' '}
							<span className='font-bold'>60%</span>
						</h2>
						<p className='text-[3.889vw] md:text-[2.5vw] xl:text-[0.938vw] text-center text-[#868686] mt-[8.333vw] md:mt-[4vw] xl:mt-[1.302vw] w-[77.222vw] xl:w-[33.385vw]'>
							Get the latest articles and business updates that you need to
							know, you’ll even get special recommendations weekly.
						</p>
					</div>
					<div className='flex flex-col md:flex-row items-center gap-[1.042vw] md:gap-[2vw] mt-[3.333vw] z-30'>
						<div className='w-[77.778vw] md:w-[50vw] xl:w-[22.135vw]'>
							<Input
								opacity='0.7'
								placeholder='Your email'
								img
								imgStart
								heightCustom='h-[16.667vw] md:h-[10vw] xl:h-[3.542vw]'
								imgCustom='/email.svg'
							/>
						</div>
						<div className='w-[77.778vw] md:w-[30vw] xl:w-[9.375vw] mt-[4.167vw] md:mt-0'>
							<Button>Receive</Button>
						</div>
					</div>
				</div>
				{/* SQUAD PLUS  */}
				<div className='hidden xl:absolute w-[8.073vw] h-[8.646vw] right-[-8%] bottom-[-15%]'>
					<Image src={'/plus-squad.svg'} fill alt='plus' />
				</div>
			</div>
			<div className='w-full my-[22.222vw] md:my-[5vw] xl:my-[5.208vw]'>
				<Marquee>
					{[
						...rainingLineLinks,
						...rainingLineLinks,
						...rainingLineLinks,
						...rainingLineLinks,
					].map((nav, i) => (
						<div className='relative mr-[2.083vw]' key={i}>
							<p
								onClick={() => setCarVariableSelected(i)}
								className={`text-[6.667vw] md:text-[4vw] xl:text-[2.083vw] cursor-pointer duration-300 ease-in-out xl:hover:text-white ${
									carVariableSelected === i ? '' : 'text-[#414141]'
								}`}
							>
								{nav}
							</p>
							<div
								className={`absolute top-[60%] -z-10 duration-300 ease-in-out -rotate-[1deg] ${
									carVariableSelected === i ? 'w-full' : 'w-0'
								}  h-[1.389vw] xl:h-[0.781vw] bg-[#33B7BC]`}
							></div>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	)
}

const rainingLineLinks = [
	'Lexus',
	'Mercedes',
	'Audi',
	'BMW',
	'Rolls-Royce',
	'Cadillac',
	'Maserati',
	'Lamborghini',
	'Bentley',
	'Porsche',
]
