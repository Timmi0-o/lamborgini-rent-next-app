import { AboutUs } from '@/components/layouts/AboutUs/AboutUs'
import { Advantages } from '@/components/layouts/Advantages'
import { AskUs } from '@/components/layouts/AskUs'
import { Discount } from '@/components/layouts/Discount/Discount'
import { MostPopular } from '@/components/layouts/MostPopular'
import { RentCars } from '@/components/layouts/RentCars/RentCars'
import { Reviews } from '@/components/layouts/Reviews'
import { Section } from '@/components/ui/Section'

export default function Home() {
	return (
		<Section>
			<MostPopular />
			<RentCars />
			<AboutUs />
			<Reviews />
			<Advantages />
			<AskUs />
			<Discount />
		</Section>
	)
}
