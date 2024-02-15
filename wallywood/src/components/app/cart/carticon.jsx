import { CartIconStyle } from "./carticon.style"
import { ReactComponent as CartIconSVG } from "../../../assets/svg/icon_cart.svg"
import { useCartItems } from "../providers/cartProvider"
import { Link } from "react-router-dom"

const CartIcon = () => {
    const {cartItems} = useCartItems()

    return (
        <CartIconStyle>
			<Link to="/cart">
				<CartIconSVG />
			</Link>
			<p>
			<Link to="/cart">
				Du har {cartItems.length} varer i kurven
			</Link>	
			</p>
        </CartIconStyle>
    )
}

export default CartIcon