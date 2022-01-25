import './CartScreen.css'
import CartItem from '../components/CartItem'

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal (0) items</p>
                    <p>$499.99</p>
                </div>
                <div>
                    <buton>Proceed to Checkout</buton>
                </div>
            </div>
        </div>
    )
}

export default CartScreen 