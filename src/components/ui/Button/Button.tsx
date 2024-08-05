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
				`w-full duration-200 ease-in-out ${
					heightCustom ? heightCustom : 'h-[16.667vw] lg:h-[2.813vw]'
				} bg-[#33B7BC] rounded-[2.778vw] lg:rounded-[0.417vw] text-white` +
				style.hoverShadow
			}
		>
			{children}
		</button>
	)
}
