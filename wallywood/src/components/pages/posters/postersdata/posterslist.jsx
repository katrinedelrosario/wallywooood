import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useCartItems } from "../../../app/providers/cartProvider"
import AddToCartButton from "../../../app/cart/addtocartbutton"


export const PostersList = () => {
	const [data, setData] = useState([])
	const { slug } = useParams();
	const { cartItems } = useCartItems()

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`http://localhost:4000/poster/list/${slug}`)
			setData(result.data);
		}
		getData()
	}, [slug])

	return (
		<div className="box">
			{data && data.slice(0, 9).map(poster => {
				return (
					<div key={poster.id}>
						<Link to={`/posters/${slug}/${poster.slug}`}></Link>
						<div className="images">
							<img src={poster.image} alt={poster.name} />
							<h2>{poster.name}</h2>
							<h3>Kr. {poster.price},00</h3>
							<p>
								{cartItems.find((x) => x.poster.id === poster.id) ?
									(<span>Denne vare ligger i kurven</span>) :
									(<AddToCartButton id={poster.id}>Læg i kurv</AddToCartButton>)
								}
							</p>

						</div>
					</div>
				)
			})}
		</div>
	)

}
