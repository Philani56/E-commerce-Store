import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="Thumbnail 1" />
                <img src={product.image} alt="Thumbnail 2" />
                <img src={product.image} alt="Thumbnail 3" />
                <img src={product.image} alt="Thumbnail 4" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="Main Product" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="Star 1" />
                <img src={star_icon} alt="Star 2" />
                <img src={star_icon} alt="Star 3" />
                <img src={star_icon} alt="Star 4" />
                <img src={star_dull_icon} alt="Star 5" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <span className="productdisplay-right-price-old">${product.old_price}</span>
                <span className="productdisplay-right-price-new">${product.new_price}</span>
            </div>
            <div className="productdisplay-right-description">
                <p>{product.description}</p>
            </div>
            <div className="productdisplay-right-size">
                <h2>Select Size</h2>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className="add-to-cart-btn">ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay;
