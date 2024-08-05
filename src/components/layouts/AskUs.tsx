import Image from 'next/image'
import { ButtonSecond } from '../ui/ButtonSecond.module/ButtonSecond'
import { Input } from '../ui/Input'

export const AskUs = () => {
	return (
		<div className='flex justify-center gap-[3.125vw] mt-[13.542vw]'>
			<div className='hidden lg:block relative w-[57.292vw] h-[44.792vw]'>
				<Image src={'/icons/map.png'} fill alt='map' />
			</div>
			<div className='lg:mr-[3.125vw]'>
				{/* PC TITLE  */}
				<h2 className='hidden lg:block text-[11.111vw] lg:text-[3.646vw] text-center font-bold'>
					Ask us anything
				</h2>
				{/* MOBILE TITLE  */}
				<h2 className='block lg:hidden text-[11.111vw] leading-[12vw] text-center font-bold mb-[11.111vw]'>
					Ask us <br /> anything
				</h2>
				<div className='flex flex-col gap-[4.167vw] w-[88.889vw] lg:w-[36.458vw]'>
					<Input placeholder='Name' />
					<Input placeholder='E-mail' />
					<Input placeholder='+7 (999) 999 - 99 - 99' />
					<Input
						placeholder='Message'
						heightCustom='h-[38.889vw] lg:h-[9.375vw]'
					/>
				</div>
				<div className='w-[88.889vw] lg:w-[16.146vw] mt-[8.333vw] lg:mt-[2.24vw]'>
					<ButtonSecond heightCustom='h-[16.667vw] lg:h-[4.688vw]'>
						Send the request
					</ButtonSecond>
				</div>
			</div>
		</div>
	)
}
