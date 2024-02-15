import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useCartItems } from "../../../app/providers/cartProvider"
import { PostersDetailsStyle } from "./postersdetails.style"
import AddToCartButton from "../../../app/cart/addtocartbutton"


export const PostersDetails = () => {
    const [data, setData] = useState([])
    const { cartItems } = useCartItems()
    const { poster } = useParams()
    console.log(poster);

    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`http://localhost:4000/poster/details/${poster}`)
            setData(result.data);
        }
        getData()
    }, [poster])

    return (
        <PostersDetailsStyle>
        <div>
          <figure>
            <img src={data.image} alt={data.name} />
          </figure>
        </div>
        <div>
          <h2>{data.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
          <p>
            Mål: {data.width} x {data.height} cm
          </p>
          <p>Varenummer: {data.id}</p>
          <p>Pris: {data.price},00 DKK</p>
          <p>
            {cartItems.find(x => x.poster.id === data.id) ? (
              <span>Denne vare ligger allerede i kurven</span>
            ) : (
              <AddToCartButton id={data.id}>Læg i kurv</AddToCartButton>
            )}
          </p>
        </div>
      </PostersDetailsStyle>
    )

}