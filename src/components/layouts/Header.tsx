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
					<div className='flex items-center justify-between pt-[8.571vw] lg:pt-[2.083vw] px-[3.125vw]'>
						{/* LEFT NAVIGATE  */}
						<div className='flex'>
							{/* HAMBURGER  */}
							<div className='mr-[3.021vw] cursor-pointer'>
								<div className='w-[15.714vw] lg:w-[3.177vw] h-[0.052vw] bg-white mb-[2vw] lg:mb-[0.365vw] rounded-ee-full'></div>
								<div className='w-[15.714vw] lg:w-[3.177vw] h-[0.052vw] bg-white translate-x-[0.521vw] rounded-ee-full'></div>
							</div>
							{/* LEFT LIST   */}
							<div className='hidden lg:flex items-center gap-[2.083vw]'>
								{leftNavigate.map((nav, i) => (
									<span className='text-[0.781vw] text-[#FEFEFE]' key={i}>
										{nav}
									</span>
								))}
							</div>
						</div>
						{/* LOGO  */}
						<div className='flex flex-col items-center w-[14.286vw] lg:w-[7.656vw] mr-[5.208vw]'>
							<div className='relative w-full h-[13.429vw] lg:h-[7.24vw]'>
								<Image src={' /logo.svg'} fill alt='' />
							</div>
							<div className='hidden lg:relative w-full h-[0.573vw]'>
								<Image src={'/subLogo.svg'} fill alt='' />
							</div>
						</div>
						{/* RIGHT NAVIGATE  */}
						<div>
							<div className='hidden lg:flex items-center gap-[3.125vw]'>
								{rightNavigate.map((nav, i) => (
									<span className='text-[0.781vw] text-[#FEFEFE]' key={i}>
										{nav}
									</span>
								))}
							</div>
							<span className='block lg:hidden text-[3.714vw] text-[#FEFEFE]'>
								ENG
							</span>
						</div>
					</div>
					{/* TITLE  */}
					<div className='flex flex-col items-center w-full mt-[56vw] lg:mt-[15.937vw]'>
						<h1 className='text-[17.143vw] lg:text-[6.25vw] font-medium leading-[25.714vw] lg:leading-[4.688vw]'>
							Dubai
						</h1>
						<p className='text-[4.857vw] lg:text-[1.667vw] font-normal'>
							luxury car rental
						</p>
					</div>
					{/* LINE  */}
					<div className='flex flex-col justify-center absolute bottom-0 left-[50%] translate-x-[-50%] w-[0.104vw]'>
						<div className='w-full h-[5.714vw] lg:h-[1.042vw] bg-[#33B7BC]'></div>
						<div className='w-full h-[11.429vw] lg:h-[2.083vw] bg-[#ffffff42]'></div>
					</div>
					{/* SOCIAL LINKS  */}
					<div className='flex gap-[4.857vw] lg:gap-[1.042vw] absolute bottom-[3.125vw] right-[3.125vw]'>
						<div className='flex items-center justify-center size-[11.429vw] lg:size-[2.813vw] bg-[#34AADF] rounded-full cursor-pointer'>
							<div className='relative size-[6.286vw] lg:size-[1.563vw]'>
								<Image src={'/telegram.svg'} fill alt='' />
							</div>
						</div>
						<div className='flex items-center justify-center size-[11.429vw] lg:size-[2.813vw] bg-[#43D854] rounded-full cursor-pointer'>
							<div className='relative size-[6.286vw] lg:size-[1.563vw]'>
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
