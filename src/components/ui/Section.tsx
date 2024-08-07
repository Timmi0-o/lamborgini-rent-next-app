import { ReactNode } from 'react'

export const Section = ({ children }: { children: ReactNode }) => {
	return <div className='w-[100vw] mx-auto'>{children}</div>
}
