import { ReactNode } from 'react'
import style from './ButtonSecond.module.scss'

interface ButtonSecondProps {
	children: ReactNode
	heightCustom?: string
}

export const ButtonSecond = ({ children, heightCustom }: ButtonSecondProps) => {
	return (
		<button
			className={
				`w-full duration-200 ease-in-out ${
					heightCustom ? heightCustom : 'h-[10.833vw] lg:h-[2.813vw]'
				} border-[0.052vw] border-[#33B7BC] rounded-[2.222vw] lg:rounded-[0.417vw] lg:hover:bg-[#2EACB0] lg:hover:text-white text-[3.611vw] lg:text-[0.781vw] ` +
				style.hoverShadow
			}
		>
			{children}
		</button>
	)
}
