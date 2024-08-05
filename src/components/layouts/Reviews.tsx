'use client'
import Image from 'next/image'
import { useState } from 'react'

export const Reviews = () => {
	const [reviewHover, setReviewHover] = useState<number | null>(null)
	return (
		<div className='mt-[260px]'>
			{/* TITLE  */}
			<h1 className='text-[100px] font-medium text-center mb-[120px]'>
				Reviews
			</h1>
			{/* REVIEWS  */}
			<div className='flex gap-[6px] justify-center'>
				{Array.from({ length: 4 }).map((_, i) => (
					<div
						onMouseMove={() => setReviewHover(i)}
						onMouseOut={() => setReviewHover(null)}
						className='relative w-[470px] h-[740px] '
						key={i}
					>
						<div
							className={`flex justify-center items-center absolute size-full top-0 left-0 z-10 duration-200 ease-in-out ${
								reviewHover === i ? 'bg-[#0000008a]' : 'opacity-0'
							}`}
						>
							{/* PLAY BUTTON  */}
							<div className='flex justify-center items-center size-[80px] bg-[#33B7BC] rounded-full border-[4px] border-[#71bdc0a7] cursor-pointer'>
								<div className='relative w-[20px] h-[32px]'>
									<Image src={'/play.svg'} fill alt='play' />
								</div>
							</div>
						</div>
						<Image
							className='rounded-[4px]'
							src={`/icons/review${i + 1}.png`}
							fill
							alt=''
						/>
					</div>
				))}
			</div>
		</div>
	)
}
