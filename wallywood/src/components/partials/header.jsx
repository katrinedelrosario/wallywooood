import { Link } from "react-router-dom";
import { HeaderStyle } from "./header.style";
import NavBarPrimary from "./navbarprimary";

const Header = () => {
    return (
        <HeaderStyle>
            <Link to ='/'>wallywood</Link>
            <NavBarPrimary/>
        </HeaderStyle>
    )
}

export default Header