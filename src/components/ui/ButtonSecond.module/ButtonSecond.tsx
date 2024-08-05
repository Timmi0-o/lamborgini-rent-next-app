import style from './ButtonSecond.module.scss'

interface ButtonSecondProps {
	title: string
	heightCustom?: string
}

export const ButtonSecond = ({ title, heightCustom }: ButtonSecondProps) => {
	return (
		<button
			className={
				`w-full duration-200 ease-in-out ${
					heightCustom ? heightCustom : 'h-[54px]'
				} border-[1px] border-[#33B7BC] rounded-[8px] lg:hover:bg-[#2EACB0] lg:hover:text-white ` +
				style.hoverShadow
			}
		>
			{title}
		</button>
	)
}
