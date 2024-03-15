import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Reset } from 'styled-reset'
import GlobalStyle from './styles/Globa'
import theme from './styles/theme'
import NavBar from './components/Navigation/Navigation'
import Page from './components/Page/Page'
import Hero from './components/Hero/Hero'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<NavBar></NavBar>
				<Hero></Hero>
				<Routes>
					<Route exact path="/page" element={<Page />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
