import './index.css'

import Header from '../Header/index'

const Cart = () => (
  <>
    <Header />
    <div>
      <div className="cart-container">
        <img
          className="product-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
      </div>
    </div>
  </>
)

export default Cart
