/* eslint-disable import/no-anonymous-default-export */
export default {
	colors: {
		colorPink: '#F7418F',
		colorPinkLight: '#FC819E',
		colorPinkkSuperLight: '#FEC7B4',
		colorCreme: '#FFF3C7',
		colorGrey: '#31363F',
		colorGreyLight: '#EEEEEE',
		colorWhite: '#fff',
	},

	borderRadius: '4px',
	boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
	media: {
		mobile: 'screen and (max-width: 768px)',
		// eslint-disable-next-line no-useless-concat
		tablet: 'screen and (min-width: 769px)' + 'and (max-width: 1199px)',
		desktop: 'screen and (min-width: 1200px)',
	},
}

// @media ${props => props.theme.media.tablet} {
// margin: 0 40px;
// }
