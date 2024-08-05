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
				className={'absolute left-[-30%] top-[-50%] ' + style.glowing_left}
			></div>
			<div
				className={`absolute right-[20%] top-[-50%] ` + style.glowing_right}
			></div>
			{/* DISCOUNT COUPON & SQUAD PLUS */}
			<div className='relative w-[1170px] h-[407px] mx-auto mb-[300px]'>
				{/* DISCOUNT COUPON  */}
				<div className='relative overflow-clip flex flex-col items-center justify-center mt-[260px] size-full rounded-ss-[129px] rounded-es-[29px]  rounded-e-[29px] bg-[#1E1D1E]'>
					{/* CIRCLE RIGHT  */}
					<div className='absolute right-0 top-0 w-[264px] h-[352px]'>
						<Image src={'/discount-circle-right.svg'} fill alt='' />
					</div>
					{/* CIRCLE LEFT  */}
					<div className='absolute left-[2%] bottom-[-30%] w-[361px] h-[480px] opacity-35'>
						<Image src={'/discount-circle-left.svg'} fill alt='' />
					</div>
					<div className='relative z-20 flex flex-col items-center'>
						<h2 className='text-[46px]'>
							Get a discount of up to <span className='font-bold'>60%</span>
						</h2>
						<p className='text-[18px] text-center text-[#868686] mt-[25px] w-[641px]'>
							Get the latest articles and business updates that you need to
							know, you’ll even get special recommendations weekly.
						</p>
					</div>
					<div className='flex items-center gap-[20px] mt-[64px] z-30'>
						<div className='w-[425px]'>
							<Input
								opacity='0.7'
								placeholder='Your email'
								img
								imgStart
								heightCustom='h-[68px]'
								imgCustom='/email.svg'
							/>
						</div>
						<div className='w-[180px]'>
							<Button title='Receive' />
						</div>
					</div>
				</div>
				{/* SQUAD PLUS  */}
				<div className='absolute w-[155px] h-[166px] right-[-8%] bottom-[-15%]'>
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
						<div className='relative mr-[40px]' key={i}>
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
