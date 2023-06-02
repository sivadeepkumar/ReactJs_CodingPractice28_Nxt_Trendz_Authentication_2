import './index.css'
import Header from '../Header'

const Products = () => (
  <>
    <Header />
    <div className="main-container">
      <div className="product-container">
        <img
          className="product-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
      </div>
    </div>
  </>
)

export default Products
