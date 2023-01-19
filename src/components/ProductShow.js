import React, { useRef, useState } from 'react'
import './productShow.css'

import products from '../images/Products'
import product_thumbnails from '../images/ThumbnailProducts'
import CloseIcon from '../images/icon-close.svg'
import NextIcon from '../images/icon-next.svg'
import PrevIcon from '../images/icon-previous.svg'

const ProductShow = (props) => {

    const {slideImageIndex, setShowDetailImage} =props

    const [index, setIndex] = useState(slideImageIndex)
    const slider = useRef(null)


    const bottomImages = product_thumbnails.map((item,index) => { 
        return <img 
                src={item.image} 
                alt="thumnbail" 
                key={item.id}
                onClick={()=> changeSlideTo(index)}
            />
    })

    const nextSlide = () => {
        let aux = 0;
        if ( index + 1 < products.length)
            aux = index + 1
        
        slider.current.src = products[aux].image
        setIndex(aux)
    }

    const prevSlide = () => {
        let aux = products.length - 1;
        if ( index - 1 >= 0)
            aux = index - 1
        
        slider.current.src = products[aux].image
        setIndex(aux)
    }

    const changeSlideTo = (index) => {
        slider.current.src = products[index].image
        setIndex(index)
    }

    return (
        <div className='productShow__container'>
            <img onClick={() => setShowDetailImage(prev => !prev)} className='productShow__closeIcon' src={CloseIcon} alt='close-icon'/>
            <div className='productShow__main'>
                <div className='productShow__mainArrows'>
                    <img onClick={() => prevSlide()} src={PrevIcon} alt='previcon'/>
                    <img onClick={() => nextSlide()} src={NextIcon} alt='nexticon'/>
                </div>
                <img ref={slider} className='productShow__mainImage' src={products[index].image} alt="main"/>
            </div>
            <div className='productShow__bottomImages'>
                {bottomImages}
            </div> 
        </div>
  )
}

export { ProductShow }