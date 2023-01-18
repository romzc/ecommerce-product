import React from 'react'

import Product from './../images/image-product-1-thumbnail.jpg'
import CloseIcon from './../images/icon-close.svg'
import './floatInfo.css'

const FloatInfo = (props) => {


    return (
        <div className={ `float__info  }`}>
            <h4>Cart</h4>
            <hr />
            <div className="float__preview">
                { 
                    props.productQuantity == 0 ? 
                        <p>Your cart is empty</p> 
                        :
                        <div className="float__preview-info">
                            <img className="float__image" src={Product} alt="image-product" />
                            <p>
                                Autumn Limited Edition
                                <span>$125.00 x 3 <strong>$375.00</strong></span>
                            </p>
                            <img  onClick={() => props.setProductQuantity(0)} className="float__image-delete" src={CloseIcon} alt="delete-icon" />
                        </div>
                }
                <button>Checkout</button>
            </div>
        </div>
    )
}

export { FloatInfo }