'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Input } from '../ui/Input'

export const MostPopular = () => {
	const [carSelected, setCarSelected] = useState(1)
	return (
		<div className='flex justify-center items-start mt-[180px]'>
			{/* PREVIEW CAR  */}
			<Image
				src={'/icons/mostPopularLamborghini.png'}
				width={1100}
				height={860}
				alt=''
			/>
			<div className='flex flex-col gap-[50px] ml-[60px]'>
				{/* TITLE  */}
				<h2 className='text-[70px] leading-[50px]'>Most Popular</h2>
				{/* INPUT  */}
				<div className='w-[700px]'>
					<Input placeholder='Car search' img />
				</div>
				{/* SELECT CAR  */}
				<div className='flex gap-[69px]'>
					{/* INDICATOR  */}
					<div className='flex flex-col items-center w-[48px]'>
						<Image src={'/arrow.svg'} width={46} height={46} alt='' />
						<div className='w-[4px] h-[495px] bg-[#2C2C2C]'></div>
						<Image
							className=' rotate-180'
							src={'/arrow.svg'}
							width={46}
							height={46}
							alt=''
						/>
					</div>
					{/* CARS & BUTTON  */}
					<div>
						<div>
							{cars.map((car, i) => (
								<div
									onClick={() => setCarSelected(i)}
									style={{
										transform: i !== carSelected ? `translateX(30px)` : '',
									}}
									className={`relative mb-[33px] duration-500 ease-in-out cursor-pointer`}
									key={i}
								>
									<h2
										className={`text-[24px] font-bold mb-[21px] duration-200 ${
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
											<div className='w-full h-[2px] bg-[#2C2C2C] mt-[10px]'></div>
											<div className='w-[55%] h-[2px] bg-[#2C2C2C] rotate-45 ml-[-98px] mt-[-42px]'></div>
										</div>
										<div className='flex items-center justify-center size-[20px] bg-[#33B7BC] rounded-full mt-[-100px] ml-[-100px]'>
											<div className='flex items-center justify-center size-[14px] bg-white rounded-full'></div>
										</div>
									</div>
								</div>
							))}
						</div>
						{/* VIEW ALL BUTTON  */}
						<button className='w-[215px] h-[57px] text-[15px] font-bold bg-[#33B7BC] rounded-[10px]'>
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
