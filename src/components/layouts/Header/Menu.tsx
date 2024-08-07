import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import style from './Menu.module.scss'

interface MenuProps {
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const Menu = ({ isShow, setIsShow }: MenuProps) => {
	const [isMenuListSelected, setIsMenuListSelected] = useState<null | number>(
		null
	)

	return (
		<div
			className={`fixed size-full left-0 top-0 z-30 duration-500 ease-in-out ${
				isShow ? '' : 'mt-[-50vw] invisible opacity-0'
			} `}
		>
			{/* BACKGROUND COLOR  */}
			<div
				className={'absolute size-full z-40 ' + style.background_color}
			></div>
			<div className='relative size-full'>
				<Image
					className='object-cover'
					src={'/icons/menu-background.png'}
					fill
					alt=''
				/>
			</div>
			<div>
				{/* CONTENT  */}
				<div className='absolute flex flex-col justify-between size-full top-0 left-0 z-[40] overflow-y-auto overflow-x-hidden'>
					{/* HEADER & OPTION LIST  */}
					<div>
						<header className='flex items-center xl:ml-[3.906vw] mt-[8.333vw] xl:mt-[2.083vw] mb-[27.778vw] xl:mb-[4.375vw] px-[5.556vw] lg:px-0'>
							<div
								onClick={() => setIsShow(false)}
								className='relative size-[9.444vw] xl:size-[2.448vw] mr-[27.778vw] xl:mr-[39.792vw] cursor-pointer lg:hover:rotate-[150deg] duration-500 ease-in-out'
							>
								<Image src={'/menu-close.svg'} fill alt='' />
							</div>
							{/* LOGO  */}
							<div className='flex flex-col items-center w-[14.286vw] md:w-[10vw] xl:w-[7.656vw] mr-[5.208vw]'>
								<div className='relative w-full h-[13.429vw] xl:h-[7.24vw]'>
									<Image src={' /logo.svg'} fill alt='' />
								</div>
								<div className='hidden xl:relative w-full h-[0.573vw]'>
									<Image src={'/subLogo.svg'} fill alt='' />
								</div>
							</div>
						</header>
						<div className='flex flex-col flex-wrap gap-[6vw] xl:gap-[1vw] ml-[11.354vw] text-[2.813vw] font-medium h-[64.167vw] xl:h-[26.542vw] w-[90vw] xl:w-[37.969vw]'>
							{menuNav.map((nav, i) => (
								<div
									className='relative w-fit'
									onClick={() => setIsMenuListSelected(i)}
									key={i}
								>
									<p
										className={`text-[5.556vw] xl:text-[2.513vw] cursor-pointer duration-300 ease-in-out ${
											isMenuListSelected === i
												? ''
												: 'text-[#76828C] hover:text-white'
										}`}
									>
										{nav}
									</p>
									<div
										className={`absolute top-[60%] -z-10 duration-300 ease-in-out -rotate-[1deg] ${
											isMenuListSelected === i ? 'w-full' : 'w-0'
										}  h-[1.389vw] xl:h-[0.781vw] bg-[#33B7BC]`}
									></div>
								</div>
							))}
						</div>
					</div>
					<footer className='flex justify-center xl:justify-between xl:border-t-[0.052vw] border-t-[#272727] py-[11.667vw] xl:py-[2.504vw] xl:pl-[11.354vw] xl:pr-[3.125vw]'>
						<p className='hidden xl:block text-[1.25vw] text-[#76828C]'>
							24 4th St - Al Quoz - Al Quoz <br /> Industrial Area 3 - Dubai
						</p>
						{/* PHONE & SOCIAL LINK  */}
						<div className='flex gap-[7vw] xl:gap-[1.563vw]'>
							<p className='text-[6.667vw] md:text-[3vw] xl:text-[1.771vw] w-fit font-bold'>
								+971 58 590 7875
							</p>
							<div className='flex gap-[2.778vw] md:gap-[1.8vw] xl:gap-[1.51vw]'>
								<div className='flex justify-center items-center size-[8.889vw] md:size-[6vw] xl:size-[2.083vw] bg-[#34AADF] rounded-full'>
									<div className='relative size-[5vw] md:size-[3.5vw] xl:size-[1.25vw]'>
										<Image src={'/telegram.svg'} fill alt='telegram' />
									</div>
								</div>
								<div className='flex justify-center items-center size-[8.889vw] md:size-[6vw] xl:size-[2.083vw] bg-[#43D854] rounded-full'>
									<div className='relative size-[5vw] md:size-[3.5vw] xl:size-[1.25vw]'>
										<Image src={'/whatsapp.svg'} fill alt='whatsapp' />
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

const menuNav = [
	'Car List',
	'Yacht list',
	'Chauffeur',
	'Conditions',
	'Testimonials',
	'Articles',
	'About Us',
	'Contacts',
]
