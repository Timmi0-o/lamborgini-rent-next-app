export const Footer = () => {
	return (
		<div className='mt-[100px] w-full border-t-[1px] border-t-[#272727] px-[60px]'>
			{/* NAW LINKS & REQUEST A CALLBACK  */}
			<div className='w-[904px]'>
				<div className='grid grid-cols-3 gap-[220px] pr-[211px] border-r-[1px] border-r-[#272727] pt-[60px] '>
					{Object.keys(footerLinks).map((key) => (
						<div className='w-[160px]' key={key}>
							<h2 className='text-[20px]'>{key.split('_').join(' ')}</h2>
							<div className='flex flex-col gap-[20px] mt-[20px]'>
								{footerLinks[key].map((link, i) => (
									<p
										className='text-[#e2e2e2b5] cursor-pointer lg:hover:text-white text-[18px]'
										key={i}
									>
										{link}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const footerLinks: { [key: string]: string[] } = {
	For_Customers: [
		'About Us',
		'Conditions',
		'Testimonials',
		'Articles',
		'Contacts',
	],
	Car_List: ['SUVs', 'Convertibles', 'Sports Cars', 'Premium', 'Coupe'],
	Service: ['Car List', 'Yacht list', 'Chauffeur'],
}
