import React, { useRef } from 'react'
import  products from '../images/Products'
import  productThumbnails from '../images/ThumbnailProducts'

import './slideshow.css'
import PrevIcon from '../images/icon-previous.svg'
import NextIcon from '../images/icon-next.svg'

const SlideShow = (props) => {


    const { setShowDetailImage, setSlideImageIndex, slideImageIndex } = props

    const slideRef = useRef(null)

    const nextSlide = () => {
        let aux = 0
        if(slideImageIndex + 1< products.length)
            aux = slideImageIndex + 1

        slideRef.current.children[slideImageIndex].classList.toggle('active')
        slideRef.current.children[aux].classList.toggle('active')
        setSlideImageIndex(aux)
    }

    const prevSlide = () => {
        let aux = products.length - 1
        if( slideImageIndex - 1 >= 0 )
            aux = slideImageIndex - 1

        slideRef.current.children[slideImageIndex].classList.toggle('active')
        slideRef.current.children[aux].classList.toggle('active')
        setSlideImageIndex(aux)
    }

    const changeSlide = (index) => {
        slideRef.current.children[slideImageIndex].classList.toggle('active')
        slideRef.current.children[index].classList.toggle('active')
        setSlideImageIndex(index)
    }


    const divs = productThumbnails.map((item,index) => { 
        return <img 
                src={item.image} 
                alt="main-land" 
                key={item.id}
                onClick={()=> changeSlide(index)}
            />
    })

    return (
        <div className='slideshow__container'>
            <div className='slideshow__arrows'>
                <span onClick={prevSlide}><img src={PrevIcon} alt=''/></span>
                <span onClick={nextSlide}><img src={NextIcon} alt=''/></span>
            </div>
            <div ref={slideRef} className="slideshow__images">
                <img 
                    className="image active"
                    src={products[0].image}
                    onClick={() => setShowDetailImage(prev=>!prev)}
                    alt='product1'
                />
                <img 
                    className="image" 
                    src={products[1].image}
                    onClick={() => setShowDetailImage(prev=>!prev)}
                    alt='product2'
                />
                <img 
                    className="image" 
                    src={products[2].image}
                    onClick={() => setShowDetailImage(prev=>!prev)}
                    alt='product3'
                />
                <img 
                    className="image" 
                    src={products[3].image}
                    onClick={() => setShowDetailImage(prev=>!prev)}
                    alt='product4'
                />
            </div>

            <div className='slideshow__bottom-images'>
                {divs}
            </div>

        </div>
    )
}

export { SlideShow }