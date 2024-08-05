import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { ButtonSecond } from '../../ui/ButtonSecond.module/ButtonSecond'
import { Input } from '../../ui/Input'
import style from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className='mt-[22.222vw] lg:mt-[5.208vw] w-full'>
			<div className='border-y-[0.052vw] border-y-[#272727] px-[3.125vw]'>
				{/* NAW LINKS & REQUEST A CALLBACK  */}
				<div className='flex flex-col lg:flex-row justify-center gap-[11.111vw] lg:gap-[4.167vw] lg:pr-[10.417vw]'>
					{/* NAW LINKS  */}
					<div className='grid grid-cols-2 lg:grid-cols-3 gap-[13.889vw] lg:gap-[11.458vw] lg:pr-[10.99vw] lg:border-r-[0.052vw] border-r-[#272727] pt-[3.125vw] w-[88.889vw] lg:w-[47.083vw]'>
						{Object.keys(footerLinks).map((key) => (
							<div className='w-[43.889vw] lg:w-[8.333vw]' key={key}>
								<h2 className='text-[4vw] lg:text-[1.042vw]'>
									{key.split('_').join(' ')}
								</h2>
								<div className='flex flex-col gap-[7.778vw] lg:gap-[1.042vw] mt-[7.778vw] lg:mt-[1.042vw]'>
									{footerLinks[key].map((link, i) => (
										<p
											className='text-[#e2e2e2b5] cursor-pointer lg:hover:text-white text-[4vw] lg:text-[0.938vw]'
											key={i}
										>
											{link}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
					{/* CALLBACK  */}
					<div className='flex flex-col items-center lg:items-baseline pt-[3.125vw] pb-[3.229vw]'>
						{/* PHONE & SOCIAL LINK  */}
						<div className='flex gap-[7vw] lg:gap-[1.563vw]'>
							<p className='text-[6.667vw] lg:text-[1.771vw] w-fit font-bold'>
								+971 58 590 7875
							</p>
							<div className='flex gap-[2.778vw] lg:gap-[1.51vw]'>
								<div className='flex justify-center items-center size-[8.889vw] lg:size-[2.083vw] bg-[#34AADF] rounded-full'>
									<div className='relative size-[5vw] lg:size-[1.25vw]'>
										<Image src={'/telegram.svg'} fill alt='telegram' />
									</div>
								</div>
								<div className='flex justify-center items-center size-[8.889vw] lg:size-[2.083vw] bg-[#43D854] rounded-full'>
									<div className='relative size-[5vw] lg:size-[1.25vw]'>
										<Image src={'/whatsapp.svg'} fill alt='whatsapp' />
									</div>
								</div>
							</div>
						</div>
						<div className='w-[88.889vw] lg:w-[15.313vw] mt-[1.042vw]'>
							<ButtonSecond>REQUEST A CALLBACK</ButtonSecond>
						</div>
						<p className='text-center lg:text-left text-[5.556vw] lg:text-[1.25vw] mt-[2.604vw]'>
							24 4th St - Al Quoz - Al Quoz <br /> Industrial Area 3 - Dubai
						</p>
						<div className='hidden lg:block mt-[3.646vw] w-[29.688vw]'>
							<Input
								placeholder='Write your E-mail'
								btnTitle='Submit'
								// buttonFn={() => void}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden lg:block w-full py-[1.823vw] border-b-[0.052vw] border-b-[#272727]'>
				<Marquee direction='right' speed={40}>
					{[
						...payImg,
						...payImg,
						...payImg,
						...payImg,
						...payImg,
						...payImg,
					].map((img, i) => (
						<div className={`relative mr-[2.083vw] ${img.size}`} key={i}>
							<Image
								className={style.grayscale_img + ' duration-300 ease-in-out'}
								src={img.img}
								fill
								alt={img.img}
							/>
						</div>
					))}
				</Marquee>
			</div>
			{/* All rights reserved  */}
			<div className='flex flex-col-reverse lg:flex-row justify-between items-center py-[7.5vw] lg:py-[1.302vw] px-[3.125vw] '>
				<p className='text-[#33B7BC]'>Privacy Policy</p>
				<p className='text-[#525252] mb-[3.056vw] lg:mb-0'>
					©2023 TRINITY. All rights reserved
				</p>
				<div className='flex mb-[7.778vw] lg:mb-0 gap-[8.333vw] lg:gap-[1.563vw]'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							className='size-[7.222vw] lg:size-[1.354vw] rounded-full bg-white'
							key={i}
						></div>
					))}
				</div>
			</div>
		</div>
	)
}

const footerLinks: { [key: string]: string[] } = {
	For_Customers: [
		'About Us',
		'Conditions',
		'Testimonials',
		'Articles',
		'Contacts',
	],
	Car_List: ['SUVs', 'Convertibles', 'Sports Cars', 'Premium', 'Coupe'],
	Service: ['Car List', 'Yacht list', 'Chauffeur'],
}

const payImg = [
	{ img: '/icons/visa.png', size: 'w-[4.688vw] h-[1.406vw]' },
	{ img: '/icons/master-card.png', size: 'w-[4.063vw] h-[2.24vw]' },
	{ img: '/icons/american-express.png', size: 'w-[5.156vw] h-[2.031vw]' },
	{ img: '/icons/union-pay.png', size: 'w-[3.75vw] h-[2.292vw]' },
	{ img: '/icons/tether.png', size: 'w-[6.458vw] h-[1.406vw]' },
	{ img: '/icons/google-pay.png', size: 'w-[4.844vw] h-[1.927vw]' },
	{ img: '/icons/apple-pay.png', size: 'w-[4.479vw] h-[2.135vw]' },
	{ img: '/icons/giro-pay.png', size: 'w-[4.427vw] h-[1.927vw]' },
	{ img: '/icons/cash-u.png', size: 'w-[6.094vw] h-[1.406vw]' },
	{ img: '/icons/safety-pay.png', size: 'w-[6.563vw] h-[1.771vw]' },
]
