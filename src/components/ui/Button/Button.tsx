import { ReactNode } from 'react'
import style from './Button.module.scss'

interface ButtonProps {
	children: ReactNode
	heightCustom?: string
}

export const Button = ({ children, heightCustom }: ButtonProps) => {
	return (
		<button
			className={
				`w-full duration-200 ease-in-out text-[4.167vw] md:text-[3vw] xl:text-[0.781vw] ${
					heightCustom ? heightCustom : 'h-[16.667vw] md:h-[7vw] xl:h-[2.813vw]'
				} bg-[#33B7BC] rounded-[2.778vw] md:rounded-[1vw] xl:rounded-[0.417vw] text-white` +
				style.hoverShadow
			}
		>
			{children}
		</button>
	)
}
