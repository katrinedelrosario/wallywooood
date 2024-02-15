import styled from 'styled-components'
import { ClearList } from '../styled/mixins'

export const NavBarPrimaryStyle = styled.nav`
	height: 100%;
	margin-top: 2.1rem;

	ul {
		display: flex;
		align-content: flex-end;
		${ClearList}

		li {
			margin-left: 2rem;
			text-transform: uppercase;
			a {
				font-family: ${props => props.theme.fonts[0]};
				text-decoration: none;
				color: ${props => props.theme.colors.tertiary};
				font-size: 1.1rem;
				white-space: nowrap;


				&:hover {
					color: ${props => props.theme.colors.secondary};
				}
			}
		}
	}
`