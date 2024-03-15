import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: ${({ theme }) => theme.colors.colorGreyLight};
	box-shadow: ${({ theme }) => theme.boxShadow};
	border-bottom: 1px solid ${({ theme }) => theme.colors.colorGrey};
`

export const Logo = styled(Link)`
	padding: 1rem 0;
	color: ${({ theme }) => theme.colors.colorPink};
	text-decoration: none;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 2.7rem;
	letter-spacing: 2px;

	@media ${props => props.theme.media.mobile} {
		font-size: 2rem;
	}
`

export const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

	span {
		height: 2px;
		width: 25px;
		background-color: ${({ theme }) => theme.colors.colorPink};
		margin-bottom: 4px;
		border-radius: ${({ theme }) => theme.borderRadius};
	}

	@media ${props => props.theme.media.mobile} {
		display: flex;
	}
`

export const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media ${props => props.theme.media.mobile} {
		overflow: hidden;
		flex-direction: column;
		max-height: ${props => (props.isopen === 'true' ? '300px' : '0')};
		transition: max-height 0.3s ease-in;
		width: 100%;
	}
`
export const MenuLink = styled(Link)`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.colorPink};
	font-weight: 400;
	transition: all 0.2s ease-in;
	font-size: 1.25rem;
	letter-spacing: 2px;
	position: relative;
	margin: 4px;

	&::after {
		position: absolute;
		content: '';
		background-color: ${({ theme }) => theme.colors.colorPink};
		width: 0;
		height: 1px;
		bottom: 0;
		left: 50%;
		transform: translateX(-55%);
		transition: width 0.25s linear;
	}

	&:hover::after {
		width: 80%;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.colorPinkLight};
	}

	&.active {
		color: ${({ theme }) => theme.colors.colorPinkLight};
	}
`
