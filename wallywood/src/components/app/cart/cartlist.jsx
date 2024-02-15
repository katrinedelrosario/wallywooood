import { CartListStyle } from "./cartlist.style";
import { useCartItems } from '../providers/cartProvider'
import { ReactComponent as TrashIconSVG } from '../../../assets/svg/icon_trash.svg'
import { useAuth } from "../providers/authProvider";
import axios from "axios";

const CartList = () => {
	const { cartItems, setCartItems } = useCartItems()
	const { loginData } = useAuth()


	let sum = cartItems.reduce((prev, current) => {
		return prev + +current.poster.price
	}, 0)

	const handleTrashClick = async (id) => {
		const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`
			}
		}
		const endpoint = `http://localhost:4000/cart/${id}`
		const result = await axios.delete(endpoint, options)
		if(result.data) {
			const endpoint = `http://localhost:4000/cart`
			const newCartData = await axios.get(endpoint, options)
			setCartItems(newCartData.data)
		}
	}

	return (
		<CartListStyle>
			<div>
				<div>vare(r)</div>
				<div>antal</div>
				<div>pris</div>
				{/* <div>Handling</div> */}
			</div>
		{cartItems && cartItems.map(item => {
			return (
				<div key={item.id}>
					<div>{item.poster.name}</div>
					<div>{item.quantity}</div>
					<div>{item.poster.price},00,-</div>
					<div>
						<TrashIconSVG onClick={() => handleTrashClick(item.id)} />
					</div>
				</div>
			)
		})}
			<div>
				<div>total</div>
				<div></div>
				<div>{sum},00 DKK</div>
			</div>	
			<button type="button" className="button">til betaling <span></span></button>
		</CartListStyle>
	);
}

export default CartList