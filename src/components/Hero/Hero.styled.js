import styled from 'styled-components'
import bgcImg from '../../images/flamingo_big.jpg'


export const HeroStyled = styled.section`
	/* background-image: url(${bgcImg}); */
	background-color: ${({ theme }) => theme.colors.colorPinkLight};

	height: 80vh;
	/* background-position: center;
	background-repeat: no-repeat;
	background-size: cover; */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`

const StyledColumn = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	justify-content: center;
`

export const HeroTextSection = styled(StyledColumn)`
	padding-right: 10rem;
	h1 {
		text-align: center;
		color: ${({ theme }) => theme.colors.colorWhite};
		font-size: 5rem;
		margin-bottom: 2.5rem;
	}

	p {
		text-align: center;
		color: ${({ theme }) => theme.colors.colorWhite};
		font-size: 2rem;
		line-height: 1.5;
	}
	@media ${props => props.theme.media.mobile} {
		padding: 10rem;
	}
`

export const HeroImage = styled.img`
	height: 10%;

	@media ${props => props.theme.media.mobile} {
		display: none;
	}
`
// export const HeroImage = styled(StyledColumn)`
// 	background-image: url(${flamingoImg});
// 	background-repeat: no-repeat;
// 	background-position: bottom center;
// 	background-size: 70%;

// 	@media ${props => props.theme.media.mobile} {
// 		display: none;
// 	}
// `
