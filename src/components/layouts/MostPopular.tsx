'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Input } from '../ui/Input'

export const MostPopular = () => {
	const [carSelected, setCarSelected] = useState(1)
	return (
		<div className='flex justify-center items-start mt-[9.375vw]'>
			{/* PREVIEW CAR  */}
			<div className='relative w-[57.292vw] h-[44.792vw]'>
				<Image src={'/icons/mostPopularLamborghini.png'} fill alt='' />
			</div>
			<div className='flex flex-col gap-[2.604vw] ml-[3.125vw]'>
				{/* TITLE  */}
				<h2 className='text-[3.646vw] leading-[2.604vw]'>Most Popular</h2>
				{/* INPUT  */}
				<div className='w-[36.458vw]'>
					<Input placeholder='Car search' img />
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
									onClick={() => setCarSelected(i)}
									style={{
										transform: i !== carSelected ? `translateX(1.563vw)` : '',
									}}
									className={`relative mb-[1.719vw] duration-500 ease-in-out cursor-pointer`}
									key={i}
								>
									<h2
										className={`text-[1.25vw] font-bold mb-[1.094vw] duration-200 ${
											carSelected === i ? 'text-[#33B7BC]' : 'text-[#ffffff68]'
										}`}
									>
										{car.manufacture}
									</h2>
									<p
										className={`duration-200 ${
											carSelected === i ? 'text-[#049393]' : 'text-[#ffffff2e]'
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
							))}
						</div>
						{/* VIEW ALL BUTTON  */}
						<button className='w-[11.198vw] h-[2.969vw] text-[0.781vw] font-bold bg-[#33B7BC] rounded-[0.521vw]'>
							View all
						</button>
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
