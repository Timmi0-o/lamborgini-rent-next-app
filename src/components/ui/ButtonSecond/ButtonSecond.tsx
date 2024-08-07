import { HTMLAttributes, ReactNode } from 'react'
import style from './ButtonSecond.module.scss'

interface ButtonSecondProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	heightCustom?: string
}

export const ButtonSecond = ({
	children,
	heightCustom,
	...props
}: ButtonSecondProps) => {
	return (
		<button
			className={
				`w-full duration-200 ease-in-out z-[22] relative ${
					heightCustom ? heightCustom : 'h-[10.833vw] md:h-[5vw] xl:h-[2.813vw]'
				} border-[0.052vw] border-[#33B7BC] rounded-[2.222vw] md:rounded-[1vw] xl:rounded-[0.417vw] xl:hover:bg-[#2EACB0] active:bg-[#2EACB0] xl:hover:text-white text-[3.611vw] md:text-[2vw] xl:text-[0.781vw] ` +
				style.hoverShadow
			}
			{...props}
		>
			{children}
		</button>
	)
}
