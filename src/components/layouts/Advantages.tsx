import Image from 'next/image'

export const Advantages = () => {
	return (
		<div className='flex flex-col items-center mt-[260px]'>
			{/* TITLE  */}
			<h1 className='text-[100px] text-center mb-[121px]'>Advantages</h1>
			{/* ADVANTAGES  */}
			<div className='flex flex-wrap'>
				{advantagesDescription.map((title, i) => (
					<div
						className='relative w-[635px] h-[460px] border-[1px] border-[#272727]'
						key={i}
					>
						<div className='flex items-end absolute size-full top-0 left-0 z-20'>
							<p className='text-[24px] mb-[50px] ml-[60px]'>{title}</p>
						</div>
						<Image
							src={`/icons/Advantages${i + 1}.png`}
							fill
							alt='Advantages'
						/>
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
