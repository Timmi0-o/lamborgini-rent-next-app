'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from 'lenis'
import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Provider = ({ children }: { children: ReactNode }) => {
	const lenis = new Lenis()

	gsap.registerPlugin(ScrollTrigger)

	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)

	return (
		<div>
			<ReactLenis root options={{ lerp: 0.06 }}>
				<div>
					<Header />
					{children}
					<Footer />
				</div>
			</ReactLenis>
		</div>
	)
}
