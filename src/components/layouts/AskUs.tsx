import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ButtonSecond } from '../ui/ButtonSecond/ButtonSecond'
import { Input } from '../ui/Input'

export const AskUs = () => {
	// LOCALE
	const askUsLocale = useTranslations('Index.AskUs')
	const title = askUsLocale('title')
	const inputName = askUsLocale('inputName')
	const inputEmail = askUsLocale('inputEmail')
	const inputPhone = askUsLocale('inputPhone')
	const inputMessage = askUsLocale('inputMessage')
	const button = askUsLocale('button')

	return (
		<div className='flex flex-col items-center xl:flex-row justify-center gap-[3.125vw] mt-[13.542vw] md:items-center lg:item-baseline'>
			<div className='hidden md:block z-30 relative w-[90vw] xl:w-[57.292vw] h-[60vw] xl:h-[44.792vw]'>
				<Image src={'/icons/map.png'} fill alt='map' />
			</div>
			<div className='flex flex-col items-center xl:mr-[3.125vw]'>
				{/* PC TITLE  */}
				<h2 className='hidden md:block text-[11.111vw] md:text-[6vw] xl:text-[3.646vw] text-center font-bold md:mb-[5vw] lg:mb-0'>
					{title}
				</h2>
				{/* MOBILE TITLE  */}
				<h2 className='block md:hidden text-[11.111vw] leading-[12vw] text-center font-bold mb-[11.111vw]'>
					{title}
				</h2>
				<div className='flex flex-col gap-[4.167vw] lg:gap-[1.563vw] w-[88.889vw] md:w-[90vw] xl:w-[36.458vw]'>
					<Input placeholder={inputName} />
					<Input placeholder={inputEmail} />
					<Input placeholder={inputPhone} />
					<Input
						placeholder={inputMessage}
						heightCustom='h-[38.889vw] md:h-[20vw] xl:h-[9.375vw]'
					/>
				</div>
				<div className='relative w-[88.889vw] md:w-[30vw] xl:w-[16.146vw] mt-[8.333vw] xl:mt-[2.24vw]'>
					<ButtonSecond heightCustom='h-[16.667vw] md:h-[10vw] xl:h-[4.688vw]'>
						{button}
					</ButtonSecond>
				</div>
			</div>
		</div>
	)
}
