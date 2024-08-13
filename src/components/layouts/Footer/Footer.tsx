import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { ButtonSecond } from '../../ui/ButtonSecond/ButtonSecond'
import { Input } from '../../ui/Input'
import style from './Footer.module.scss'

export const Footer = () => {
	const footerLocale = useTranslations('Footer')
	return (
		<div className=' w-full'>
			<div className='border-y-[0.052vw] border-y-[#272727] px-[3.125vw]'>
				{/* NAW LINKS & REQUEST A CALLBACK  */}
				<div className='flex flex-col xl:flex-row justify-center gap-[11.111vw] xl:gap-[4.167vw] xl:pr-[10.417vw]'>
					{/* NAW LINKS  */}
					<div className='grid grid-cols-2 md:grid-cols-3 gap-[13.889vw] xl:gap-[11.458vw] xl:pr-[10.99vw] xl:border-r-[0.052vw] border-r-[#272727] pt-[3.125vw] w-[88.889vw] xl:w-[47.083vw]'>
						{Object.keys(footerLocale.raw('footerLinks')).map((key) => (
							<div
								className='w-[43.889vw] md:w-[30vw] xl:w-[8.333vw]'
								key={key}
							>
								<h2 className='text-[4vw] md:text-[2.5vw] xl:text-[1.042vw]'>
									{key.split('_').join(' ')}
								</h2>
								<div className='flex flex-col gap-[7.778vw] md:gap-[3vw] xl:gap-[1.042vw] mt-[7.778vw] md:mt-[3vw] xl:mt-[1.042vw]'>
									{footerLocale
										.raw('footerLinks')
										[key].map((link: string, i: number) => (
											<p
												className='text-[#e2e2e2b5] cursor-pointer xl:hover:text-white text-[4vw] md:text-[2vw] xl:text-[0.938vw]'
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
					<div className='flex flex-col md:flex-row xl:flex-col items-center xl:items-baseline pt-[3.125vw] md:pt-0 xl:pt-[3.125vw] pb-[3.229vw] md:gap-[5vw] xl:gap-0'>
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

						<div className='flex flex-col md:mt-[5vw] mt-[1.042vw] xl:mt-[1vw]'>
							<div className='md:w-[40vw] w-[88.889vw] xl:w-[15.313vw]'>
								<ButtonSecond>{footerLocale('button')}</ButtonSecond>
							</div>
							<p className='text-center xl:text-left text-[5.556vw] md:text-[2vw] xl:text-[1.25vw] mt-[2.604vw]'>
								{footerLocale('street')}
							</p>
							<div className='hidden xl:block mt-[3.646vw] w-[29.688vw]'>
								<Input
									placeholder={footerLocale('inputEmail')}
									btnTitle={footerLocale('inputButton')}
									// buttonFn={() => void}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* PAYMENT METHODS RUN LIST  */}
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
			<div className='flex flex-col-reverse md:flex-row justify-between items-center py-[7.5vw] md:py-[3vw] xl:py-[1.302vw] px-[3.125vw] '>
				<p className='text-[#33B7BC]'>{footerLocale('privacy')}</p>
				<p className='text-[#525252] mb-[3.056vw] md:mb-0'>
					{footerLocale('rights')}
				</p>
				<div className='flex mb-[7.778vw] md:mb-0 gap-[8.333vw] md:gap-[4vw] xl:gap-[1.563vw]'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							className='size-[7.222vw] md:size-[4vw] xl:size-[1.354vw] rounded-full bg-white'
							key={i}
						></div>
					))}
				</div>
			</div>
		</div>
	)
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
