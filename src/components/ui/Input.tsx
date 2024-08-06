'use client'
import Image from 'next/image'
import { useState } from 'react'

interface InputProps {
	placeholder: string
	img?: boolean
	imgStart?: boolean
	imgCustom?: string
	heightCustom?: string
	borderCustom?: string
	opacity?: string
	buttonFn?: () => void
	btnTitle?: string
}

export const Input = ({
	placeholder,
	img,
	heightCustom,
	imgStart,
	imgCustom,
	borderCustom,
	opacity,
	buttonFn,
	btnTitle,
}: InputProps) => {
	const [inputFocus, setInputFocus] = useState(false)
	return (
		<div
			style={{ opacity: opacity }}
			className={`flex items-center duration-200 ease-in-out ${
				imgStart ? 'flex-row-reverse' : ''
			} border-[0.052vw] ${
				borderCustom
					? borderCustom
					: ` ${
							inputFocus
								? 'border-[#33B7BC]'
								: 'border-[#43434358] xl:hover:border-[#434343d3]'
					  }`
			} bg-[#1C1C1C] w-full rounded-[2.778vw] md:rounded-[1vw] xl:rounded-[0.521vw] px-[5.556vw] xl:px-[1.563vw] ${
				heightCustom ? heightCustom : 'h-[16.667vw] md:h-[10vw] xl:h-[4.688vw]'
			}`}
		>
			<input
				onFocus={() => setInputFocus(true)}
				onBlur={() => setInputFocus(false)}
				type='text'
				placeholder={placeholder}
				className='size-full rounded-[0.521vw] bg-transparent outline-none text-[4.167vw] md:text-[2.5vw] xl:text-[1.042vw] pl-[1.563vw]]'
			/>
			{img && (
				<div
					className={`flex items-center ${
						imgStart ? 'mr-[3.889vw] xl:mr-[0.729vw]' : ''
					}`}
				>
					<div className='relative size-[5.833vw] xl:size-[1.563vw]'>
						<Image
							fill
							src={imgCustom ? imgCustom : '/search.svg'}
							alt='search'
						/>
					</div>
				</div>
			)}
			{buttonFn || btnTitle ? (
				<button
					onClick={() => (buttonFn ? buttonFn() : null)}
					className='h-[4.167vw] w-[6.823vw] bg-[#33B7BC] text-[0.781vw] font-bold rounded-[0.521vw] translate-x-[1.4vw]'
				>
					{btnTitle}
				</button>
			) : (
				''
			)}
		</div>
	)
}
