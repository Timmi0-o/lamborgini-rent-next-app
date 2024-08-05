import { Inter } from 'next/font/google'
import Image from 'next/image'
import style from './AboutUs.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const AboutUs = () => {
	return (
		<div className='relative mt-[260px] overflow-x-clip'>
			{/* BACKGROUND IMAGE  */}
			<div className='absolute w-[870px] h-[800px] right-[-11%] top-[-5%] -z-10'>
				<Image src={'/big-logo-background.svg'} fill alt='' />
			</div>
			{/* BLUR  */}
			<div
				className={style.glowing_div + ' absolute left-[-23%] top-[-15%]'}
			></div>
			{/* TITLE  */}
			<h1 className='text-[160px] text-center'>About Us</h1>
			{/* PROFITS  */}
			<div className='flex items-center justify-center gap-[114px] mt-[146px]'>
				{profits.map((profit, i) => (
					<div key={i}>
						{/* TITLE  */}
						<div className='flex items-end'>
							<h2
								className={
									'text-[130px] text-[#161516] leading-[90px] ' + style.number
								}
							>
								{profit.title}
							</h2>
							<p className='text-[24px]'>{profit.subTitle}</p>
						</div>
						{/* DESCRIPTION  */}
						<p className='text-[18px] text-[#DBDBDB] mt-[31px] w-[396px]'>
							{profit.describtion}
						</p>
					</div>
				))}
			</div>
			{/* QUOTE  */}
			<div className={'relative flex flex-col items-center'}>
				<div className='absolute left-[10%] top-[25%] w-[100px] h-[88px]'>
					<Image src={'/marks.svg'} fill alt='mark' />
				</div>
				<p
					className={
						'relative mt-[150px] text-[54px] italic font-extrabold text-center w-[1309px] leading-[65px] ' +
						style.quote_glow +
						' ' +
						inter.className
					}
				>
					I’m with cars for over 18 years. My auto passion and attention to
					details will make your experience with us second to none. Guaranteed.
				</p>
				<div className='flex flex-col items-end w-[1309px] mt-[30px]'>
					<p className='text-[24px]'>Kirill Aliev, MBA</p>
					<p className='text-[#969696]'>CEO Trinity car rental boutique</p>
				</div>

				<div className='absolute bottom-[10%] right-[10%] w-[100px] h-[88px] rotate-180'>
					<Image src={'/marks.svg'} fill alt='mark' />
				</div>
			</div>
			<div className='relative max-w-[1920px] h-[1083px] mt-[100px] mx-auto'>
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
