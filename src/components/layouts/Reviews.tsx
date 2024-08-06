'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Reviews = () => {
	const [reviewHover, setReviewHover] = useState<number | null>(null)
	return (
		<div className='mt-[25vw] md:mt-[18vw] xl:mt-[13.542vw]'>
			{/* TITLE  */}
			<h1 className='text-[11.111vw] xl:text-[8.333vw] font-medium text-center mb-[6.25vw]'>
				Reviews
			</h1>
			{/* REVIEWS  PC*/}
			<div className='hidden xl:flex gap-[0.313vw] justify-center'>
				{Array.from({ length: 4 }).map((_, i) => (
					<div
						onMouseMove={() => setReviewHover(i)}
						onMouseOut={() => setReviewHover(null)}
						className='relative w-[24.479vw] h-[38.542vw] '
						key={i}
					>
						<div
							className={`flex justify-center items-center absolute size-full top-0 left-0 z-10 duration-200 ease-in-out ${
								reviewHover === i ? 'bg-[#0000008a]' : 'opacity-0'
							}`}
						>
							{/* PLAY BUTTON  */}
							<div className='flex justify-center items-center size-[4.167vw] bg-[#33B7BC] rounded-full border-[0.208vw] border-[#71bdc0a7] cursor-pointer'>
								<div className='relative w-[1.042vw] h-[1.667vw]'>
									<Image src={'/play.svg'} fill alt='play' />
								</div>
							</div>
						</div>
						<Image
							className='rounded-[0.208vw]'
							src={`/icons/review${i + 1}.png`}
							fill
							alt=''
						/>
					</div>
				))}
			</div>
			{/* REVIEWS  MOBILE*/}
			<div className='flex flex-col xl:hidden item-center'>
				<div className='flex justify-center'>
					<Swiper
						slidesPerView='auto'
						spaceBetween={4}
						modules={[Mousewheel, FreeMode]}
						mousewheel={{ forceToAxis: true }}
						freeMode={{ enabled: true, sticky: false }}
					>
						{Array.from({ length: 4 }).map((_, i) => (
							<SwiperSlide className='!w-fit' key={i}>
								<div
									onMouseMove={() => setReviewHover(i)}
									onMouseOut={() => setReviewHover(null)}
									className='relative w-[55.625vw] h-[86.563vw] md:w-[45vw] md:h-[70vw] '
									key={i}
								>
									<div
										className={`flex justify-center items-center absolute size-full top-0 left-0 z-10 duration-200 ease-in-out ${
											reviewHover === i ? 'bg-[#0000008a]' : 'opacity-0'
										}`}
									>
										{/* PLAY BUTTON  */}
										<div className='flex justify-center items-center size-[4.167vw] md:size-[3vw] bg-[#33B7BC] rounded-full border-[0.208vw] border-[#71bdc0a7] cursor-pointer'>
											<div className='relative w-[1.042vw] h-[1.667vw]'>
												<Image src={'/play.svg'} fill alt='play' />
											</div>
										</div>
									</div>
									<Image
										className='rounded-[0.208vw]'
										src={`/icons/review${i + 1}.png`}
										fill
										alt=''
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='flex gap-[5vw] md:gap-[3vw] mt-[6.25vw] mx-auto'>
					<div className='relative size-[13.125vw] md:size-[8vw]'>
						<Image src={'/next-slide.svg'} fill alt='' />
					</div>
					<div className='relative size-[13.125vw] md:size-[8vw] rotate-180'>
						<Image src={'/next-slide.svg'} fill alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}
