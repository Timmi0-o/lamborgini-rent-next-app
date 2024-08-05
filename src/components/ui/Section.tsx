import { ReactNode } from 'react'

export const Section = ({ children }: { children: ReactNode }) => {
	return <div className='w-[99.5vw] mx-auto'>{children}</div>
}
