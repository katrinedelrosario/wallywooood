import CartList from "../../app/cart/cartlist"
import { ContentWrapper } from "../../app/elements/contentwrapper/contentwrapper"

const Cart = () => {
    return (
      <ContentWrapper
      title='indkøbskurv'>
        <CartList/>
      </ContentWrapper>
    )
}

export default Cart
