import React from 'react'
import { HeroStyled, HeroTextSection, HeroImage } from './Hero.styled'

const Hero = () => {
	return (
		<>
			<HeroStyled>
				<HeroImage></HeroImage>
				<HeroTextSection>
					<h1>Fundacja Miasto Pracownia</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla quos eveniet culpa ut perspiciatis,
						eos ea tenetur esse, excepturi veniam, iusto vero mollitia iure commodi cumque delectus at placeat!
					</p>
				</HeroTextSection>
			</HeroStyled>
		</>
	)
}

export default Hero
