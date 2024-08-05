import Image from 'next/image'
import { Section } from '../ui/Section'

export const Header = () => {
	return (
		<Section>
			<header className='relative h-[100vh]'>
				{/* HEADER VIDEO  */}
				<div className='headerGradient absolute top-0 left-0 z-10 size-full'></div>
				<video
					autoPlay
					loop
					muted
					className='absolute w-full h-[100vh] object-cover'
				>
					<source src='/video/lamboAI.mov' type='video/mp4' />
				</video>
				{/* HEADER INFO  */}
				<div className='absolute top-0 left-0 size-full z-30'>
					{/* HEADER NAVIGATION && LOGO  */}
					<div className='flex items-center justify-between pt-[40px] px-[60px]'>
						{/* LEFT NAVIGATE  */}
						<div className='flex'>
							{/* HAMBURGER  */}
							<div className='mr-[58px] cursor-pointer'>
								<div className='w-[61px] h-[1px] bg-white mb-[7px] rounded-ee-full'></div>
								<div className='w-[61px] h-[1px] bg-white translate-x-[10px] rounded-ee-full'></div>
							</div>
							{/* LEFT LIST   */}
							<div className='flex items-center gap-[40px]'>
								{leftNavigate.map((nav, i) => (
									<span className='text-[15px] text-[#FEFEFE]' key={i}>
										{nav}
									</span>
								))}
							</div>
						</div>
						{/* LOGO  */}
						<div className='w-[147px] mr-[100px]'>
							<div className='relative w-full h-[139px]'>
								<Image src={' /logo.svg'} fill alt='' />
							</div>
							<div className='relative w-full h-[11px]'>
								<Image src={'/subLogo.svg'} fill alt='' />
							</div>
						</div>
						{/* RIGHT NAVIGATE  */}
						<div className='flex items-center gap-[60px]'>
							{rightNavigate.map((nav, i) => (
								<span className='text-[15px] text-[#FEFEFE]' key={i}>
									{nav}
								</span>
							))}
						</div>
					</div>
					{/* TITLE  */}
					<div className='flex flex-col items-center w-full mt-[306px]'>
						<h1 className='text-[120px] font-medium leading-[90px]'>Dubai</h1>
						<p className='text-[32px] font-normal'>luxury car rental</p>
					</div>
					{/* LINE  */}
					<div className='flex flex-col justify-center absolute bottom-0 left-[50%] translate-x-[-50%] w-[2px]'>
						<div className='w-full h-[20px] bg-[#33B7BC]'></div>
						<div className='w-full h-[40px] bg-[#ffffff42]'></div>
					</div>
					{/* SOCIAL LINKS  */}
					<div className='flex gap-[20px] absolute bottom-[60px] right-[60px]'>
						<div className='flex items-center justify-center size-[54px] bg-[#34AADF] rounded-full cursor-pointer'>
							<div className='relative size-[30px]'>
								<Image src={'/telegram.svg'} fill alt='' />
							</div>
						</div>
						<div className='flex items-center justify-center size-[54px] bg-[#43D854] rounded-full cursor-pointer'>
							<div className='relative size-[30px]'>
								<Image src={'/whatsapp.svg'} fill alt='' />
							</div>
						</div>
					</div>
				</div>
			</header>
		</Section>
	)
}

const leftNavigate = ['Car List', 'Yacht list', 'Chauffeur']
const rightNavigate = ['+971 58 590 7875', 'Dubai', 'ENG']
