import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['en', 'ru']

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale)) notFound()

	return {
		locale,
		messages: (await import(`/localization/${locale}.json`)).default,
	}
})
