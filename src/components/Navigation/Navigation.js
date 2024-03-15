import React from 'react'
import { Logo, Nav, Hamburger, Menu, MenuLink } from './Navigation.styled'

const NavBar = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<Nav>
			<Logo to={'/page'}>Miasto Pracownia</Logo>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</Hamburger>
			<Menu isopen={isOpen.toString()}>
				<MenuLink to={'/'}>Home</MenuLink>
				<MenuLink to={'/posts'}>Posts</MenuLink>
				<MenuLink to={'/about'}>About</MenuLink>
				<MenuLink to={'/contact'}>Contact</MenuLink>
			</Menu>
		</Nav>
	)
}

export default NavBar
