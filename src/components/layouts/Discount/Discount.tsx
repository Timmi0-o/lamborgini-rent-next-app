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
			<div className='relative w-[88.889vw] lg:w-[60.938vw] h-[102.222vw] lg:h-[21.198vw] mx-auto mb-[22.222vw] lg:mb-[15.625vw]'>
				{/* DISCOUNT COUPON  */}
				<div className='relative overflow-clip flex flex-col items-center justify-center mt-[22.222vw] lg:mt-[13.542vw] size-full rounded-ss-[13.611vw] lg:rounded-ss-[6.719vw] rounded-es-[2.778vw] lg:rounded-es-[1.51vw] rounded-e-[2.778vw]  lg:rounded-e-[1.51vw] bg-[#1E1D1E]'>
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
						<h2 className='hidden lg:block text-[2.396vw]'>
							Get a discount of up to <span className='font-bold'>60%</span>
						</h2>
						{/* TITLE MOBILE  */}
						<h2 className='block lg:hidden text-[6.667vw]'>
							Get a discount <br /> of up to{' '}
							<span className='font-bold'>60%</span>
						</h2>
						<p className='text-[3.889vw] lg:text-[0.938vw] text-center text-[#868686] mt-[8.333vw] lg:mt-[1.302vw] w-[77.222vw] lg:w-[33.385vw]'>
							Get the latest articles and business updates that you need to
							know, you’ll even get special recommendations weekly.
						</p>
					</div>
					<div className='flex flex-col lg:flex-row items-center gap-[1.042vw] mt-[3.333vw] z-30'>
						<div className='w-[77.778vw] lg:w-[22.135vw]'>
							<Input
								opacity='0.7'
								placeholder='Your email'
								img
								imgStart
								heightCustom='h-[16.667vw] lg:h-[3.542vw]'
								imgCustom='/email.svg'
							/>
						</div>
						<div className='w-[77.778vw] lg:w-[9.375vw] mt-[4.167vw] lg:mt-0'>
							<Button>Receive</Button>
						</div>
					</div>
				</div>
				{/* SQUAD PLUS  */}
				<div className='hidden lg:absolute w-[8.073vw] h-[8.646vw] right-[-8%] bottom-[-15%]'>
					<Image src={'/plus-squad.svg'} fill alt='plus' />
				</div>
			</div>
			<div className='w-full'>
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
								className={`text-[6.667vw] lg:text-[2.083vw] cursor-pointer duration-300 ease-in-out lg:hover:text-white ${
									carVariableSelected === i ? '' : 'text-[#414141]'
								}`}
							>
								{nav}
							</p>
							<div
								className={`absolute top-[60%] -z-10 duration-300 ease-in-out -rotate-[1deg] ${
									carVariableSelected === i ? 'w-full' : 'w-0'
								}  h-[1.389vw] lg:h-[0.781vw] bg-[#33B7BC]`}
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
