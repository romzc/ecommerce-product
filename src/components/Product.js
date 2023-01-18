import React, { useState } from 'react'
import './product.css'
import MinusIcon from './../images/icon-minus.svg'
import PlusIcon from './../images/icon-plus.svg'
import CartIcon from './../images/icon-cart.svg'
import { SlideShow } from './SlideShow'

const Product = (props) => {

  const { setShowDetailImage, setProductQuantity, setSlideImageIndex, slideImageIndex } = props
  
  const [quantity, setQuantity] = useState(0)


  const changeBy = ( number ) => {
    if ( quantity + number >= 0)  
      setQuantity(prev => prev + number)
  }

  return (
    <main>
      
      <SlideShow
         setSlideImageIndex={setSlideImageIndex}
         slideImageIndex={slideImageIndex}
         setShowDetailImage={setShowDetailImage}
      />

      <div className='product__detail'>
        <h5>Sneaker Company</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
        <div className="product__detail-cost">
          <h4>$125.00 <span>50%</span></h4>
          <span> $250.00</span>
        </div>

        <div className="product__detail-quantity">
          <div className="product__detail-quantity-number">
            <img src={MinusIcon} alt="minus-icon" onClick={() => changeBy(-1)}/>
            <span>{quantity}</span>
            <img src={PlusIcon} alt="plus-icon" onClick={() => changeBy(1)}/>
          </div>
          <button className="product__detail-button" onClick={() => setProductQuantity(quantity)}>
            <img src={CartIcon} alt="cart icon" />
            Add to cart
          </button>
        </div>
       </div>
    </main>
  )
}

export { Product }