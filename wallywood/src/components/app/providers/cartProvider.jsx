import axios from "axios";
import { useState, useContext, useEffect, createContext } from "react";
import { useAuth } from "./authProvider";

const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])
	const { loginData } = useAuth()

	useEffect(() => {
		const getData = async () => {
			if (loginData && loginData.access_token) {
				const options = {
					headers: {
						Authorization: `Bearer ${loginData.access_token}`
					}
				}
				const endpoint = `http://localhost:4000/cart`
				try {

					const result = await axios.get(endpoint, options)
					setCartItems(result.data)

				} catch (err) {
					console.error(`fejl i kald af cartlist: ${err}`);
				}
			}
		}
		getData()
	}, [children, loginData]);


	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	)
}

const useCartItems = () => useContext(CartContext)

export { CartProvider, useCartItems }