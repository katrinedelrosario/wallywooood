import axios from "axios";
import { useCartItems } from "../../app/providers/cartProvider";
import { useAuth } from "../../app/providers/authProvider";
import { AddToCartButtonStyle } from "./addtocartbutton.style.js.jsx";


const AddToCartButton = props => {
	const { loginData } = useAuth()
	const { cartItems, setCartItems } = useCartItems()


	const submitToCart = async () => {
		console.log(loginData)
		const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`
			}
		}

		const formdata = new URLSearchParams()
		formdata.append('poster_id', props.id)
		formdata.append('quantity', 1)

		const endpoint = `http://localhost:4000/cart`
		const result = await axios.post(endpoint, formdata, options)
		if(result.data) {
			const newCartItems = await axios.get(endpoint, options)
			setCartItems(newCartItems.data)
		}
		console.log(result)
	}

	return (
	<>
	{cartItems.find((x) => x.poster_id === props.id) ? 
	(
		<> Dette produkt ligger allerede i kurven</>
	) : 
	(
		<AddToCartButtonStyle onClick={submitToCart}>
			{props.children}
		</AddToCartButtonStyle>
	)}
	</>
	)
}

export default AddToCartButton;