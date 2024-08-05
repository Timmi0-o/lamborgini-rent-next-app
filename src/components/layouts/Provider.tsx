'use client'
import Lenis from 'lenis'
import { ReactNode, useEffect } from 'react'

export const Provider = ({ children }: { children: ReactNode }) => {
	useEffect(() => {
		const lenis = new Lenis({
			easing: function easeInOutBack(x) {
				const c1 = 1.70158
				const c2 = c1 * 1.525

				return x < 0.5
					? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
					: (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
			},
			lerp: 0.05,
		})

		const raf = (time: number) => {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
		}
	}, [])

	return <div>{children}</div>
}
