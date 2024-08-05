import { Inter } from 'next/font/google'
import Image from 'next/image'
import style from './AboutUs.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const AboutUs = () => {
	return (
		<div className='relative mt-[13.542vw] overflow-x-clip'>
			{/* BACKGROUND IMAGE  */}
			<div className='absolute w-[72.222vw] lg:w-[45.313vw] h-[66.667vw] lg:h-[41.667vw] right-[-37vw] lg:right-[-10.417vw] top-[-5vw] lg:top-[-8.333vw] -z-10'>
				<Image src={'/big-logo-background.svg'} fill alt='' />
			</div>
			{/* BLUR  */}
			<div
				className={
					style.glowing_div + ' absolute left-[-20.833vw] top-[-15.625vw]'
				}
			></div>
			{/* TITLE  */}
			<h1 className='text-[11.111vw] lg:text-[8.333vw] text-center'>
				About Us
			</h1>
			{/* PROFITS  */}
			<div className='flex flex-wrap items-center justify-center gap-[11.111vw] lg:gap-[5.938vw] mt-[7.604vw]'>
				{profits.map((profit, i) => (
					<div key={i}>
						{/* TITLE  */}
						<div className='flex items-end'>
							<h2
								className={
									'text-[22.222vw] lg:text-[6.771vw] text-[#161516] leading-[20vw] lg:leading-[4.688vw] mr-[2.778vw] lg:mr-0 ' +
									style.number
								}
							>
								{profit.title}
							</h2>
							<p className='text-[5.556vw] lg:text-[1.25vw]'>
								{profit.subTitle}
							</p>
						</div>
						{/* DESCRIPTION  */}
						<p className='text-[4.167vw] lg:text-[0.938vw] text-[#DBDBDB] mt-[6.944vw] lg:mt-[1.615vw] w-[88.889vw] lg:w-[20.625vw]'>
							{profit.describtion}
						</p>
					</div>
				))}
			</div>
			{/* QUOTE  */}
			<div className={'relative flex flex-col items-center'}>
				<div className='absolute left-[5vw] lg:left-[9.375vw] top-[24vw] lg:top-[6.25vw] w-[12.222vw] lg:w-[5.208vw] h-[10.556vw] lg:h-[4.583vw]'>
					<Image src={'/marks.svg'} fill alt='mark' />
				</div>
				<p
					className={
						'relative mt-[29.444vw] lg:mt-[7.813vw] text-[6.111vw] lg:text-[2.813vw] italic font-extrabold text-center w-[88.889vw] lg:w-[68.177vw] leading-[7.5vw] lg:leading-[3.385vw] ' +
						style.quote_glow +
						' ' +
						inter.className
					}
				>
					I’m with cars for over 18 years. My auto passion and attention to
					details will make your experience with us second to none. Guaranteed.
				</p>
				<div className='flex flex-col items-end w-[68.177vw] mt-[8.333vw] lg:mt-[1.563vw]'>
					<p className='text-[5vw] lg:text-[1.25vw]'>Kirill Aliev, MBA</p>
					<p className='text-[3.889vw] lg:text-[0.833vw] text-[#969696]'>
						CEO Trinity car rental boutique
					</p>
				</div>

				<div className='absolute bottom-[16vw] lg:bottom-[3.125vw] right-[-1vw] lg:right-[9.375vw] w-[12.222vw] lg:w-[5.208vw] h-[10.556vw] lg:h-[4.583vw] rotate-180'>
					<Image src={'/marks.svg'} fill alt='mark' />
				</div>
			</div>
			<div className='relative max-w-[100vw] h-[56.406vw] mt-[10.938vw] lg:mt-[5.208vw] mx-auto'>
				<Image src={'/icons/about-man.png'} fill alt='' />
			</div>
		</div>
	)
}

const profits = [
	{
		title: '8',
		subTitle: 'year',
		describtion:
			"We've come a long way from a 2-people company to winning at Webby's.",
	},
	{
		title: '72',
		subTitle: 'cars',
		describtion:
			"We've come a long way from a 2-people company to winning at Webby's.",
	},
	{
		title: '190',
		subTitle: 'people',
		describtion:
			"We've come a long way from a 2-people company to winning at Webby's.",
	},
]
