'use client'
const { shuffle } = require('txt-shuffle')

const useShuffle = () => {
	const shuffleText = (
		id: string,
		text: string,
		duration?: number,
		onlyNums?: boolean
	) => {
		const element = document.getElementById(id)
		if (element) {
			shuffle({
				text: text,
				animation: 'stay',
				duration: duration,
				fps: 40,
				glyphs: onlyNums
					? '1234567890'
					: 'qwertyuiopaasdfghjklzxcvbnm123456789',
				onUpdate: (output: string) => {
					element.innerText = output
				},
			})
		}
	}

	return shuffleText
}

export default useShuffle
