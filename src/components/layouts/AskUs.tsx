import Image from 'next/image'
import { ButtonSecond } from '../ui/ButtonSecond.module/ButtonSecond'
import { Input } from '../ui/Input'

export const AskUs = () => {
	return (
		<div className='flex justify-center gap-[60px] mt-[260px]'>
			<div className='relative w-[1100px] h-[860px]'>
				<Image src={'/icons/map.png'} fill alt='map' />
			</div>
			<div className='mr-[60px]'>
				<h2 className='text-[70px]'>Ask us anything</h2>
				<div className='flex flex-col gap-[30px] w-[700px]'>
					<Input placeholder='Name' />
					<Input placeholder='E-mail' />
					<Input placeholder='+7 (999) 999 - 99 - 99' />
					<Input placeholder='Message' heightCustom='h-[180px]' />
				</div>
				<div className='w-[310px] mt-[43px]'>
					<ButtonSecond heightCustom='h-[90px]' title='Send the request' />
				</div>
			</div>
		</div>
	)
}
