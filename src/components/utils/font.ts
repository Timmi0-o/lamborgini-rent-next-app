import localFont from 'next/font/local'

export const stolzl = localFont({
	src: [
		{
			path: '../../../public/fonts/stolzl_regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/stolzl_medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/stolzl_bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
})
