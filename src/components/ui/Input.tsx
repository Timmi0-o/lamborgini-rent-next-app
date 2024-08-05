import Image from 'next/image'

interface InputProps {
	placeholder: string
	img?: boolean
	imgStart?: boolean
	imgCustom?: string
	heightCustom?: string
	borderCustom?: string
	opacity?: string
}

export const Input = ({
	placeholder,
	img,
	heightCustom,
	imgStart,
	imgCustom,
	borderCustom,
	opacity,
}: InputProps) => {
	return (
		<div
			style={{ opacity: opacity }}
			className={`flex ${imgStart ? 'flex-row-reverse' : ''} border-[1px] ${
				borderCustom ? borderCustom : 'border-[#43434358]'
			} bg-[#1C1C1C] w-full rounded-[10px] px-[30px] ${
				heightCustom ? heightCustom : 'h-[90px]'
			}`}
		>
			<input
				type='text'
				placeholder={placeholder}
				className='size-full rounded-[10px] bg-transparent outline-none text-[20px] pl-[30px]]'
			/>
			{img && (
				<div className={`flex items-center ${imgStart ? 'mr-[14px]' : ''}`}>
					<Image
						width={30}
						height={30}
						src={imgCustom ? imgCustom : '/search.svg'}
						alt='search'
					/>
				</div>
			)}
		</div>
	)
}
