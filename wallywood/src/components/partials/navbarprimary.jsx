import { NavLink } from "react-router-dom"
import {NavBarPrimaryStyle} from "./navbarprimary.styled"


const NavBarPrimary = () => {
	return (
		<NavBarPrimaryStyle>
			<ul>
				<li><NavLink to="/">home</NavLink></li>
				<li><NavLink to="/posters">posters</NavLink></li>
				<li><NavLink to="/about">about us</NavLink></li>
				<li><NavLink to="/contact">contact</NavLink></li>
				<li><NavLink to="/login">login</NavLink></li>
			</ul>
		</NavBarPrimaryStyle>
	)
}

export default NavBarPrimary