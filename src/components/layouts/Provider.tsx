'use client'
import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Provider = ({ children }: { children: ReactNode }) => {
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
