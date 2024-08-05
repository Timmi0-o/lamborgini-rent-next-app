import style from './Button.module.scss'

interface ButtonProps {
	title: string
	heightCustom?: string
}

export const Button = ({ title, heightCustom }: ButtonProps) => {
	return (
		<button
			className={
				`w-full duration-200 ease-in-out ${
					heightCustom ? heightCustom : 'h-[54px]'
				} bg-[#33B7BC] rounded-[8px] text-white` + style.hoverShadow
			}
		>
			{title}
		</button>
	)
}
