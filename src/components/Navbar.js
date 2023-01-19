import React, { useState } from 'react'
import { Menu } from './Menu'


import './navbar.css'
import MenuIcon from './../images/icon-menu.svg'
import CartIcon from './../images/icon-cart.svg'
import AvatarImage from './../images/image-avatar.png'
import { FloatInfo } from './FloatInfo'

const Navbar = (props) => {

  const {productQuantity, setProductQuantity} = props

  const [showMenu, setShowMenu] = useState(false)
  const [floatInfo, setFloatInfo] = useState(false)

  const changeShowMenu = () => {
    setFloatInfo(!floatInfo)
    setShowMenu(false)
  }

  const showSideMenu = () => {
    setShowMenu(!showMenu)
    setFloatInfo(false)
  }

  return (
    <nav className='nav__container'>
      <img 
        onClick={showSideMenu }
        src={MenuIcon} alt='close-icon'
        className='nav__hamburger-icon'
      />
       
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} /> 

      <h2>sneakers</h2>

      <div className='nav__desktop-menu'>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      
        
      <FloatInfo 
        floatInfo={floatInfo}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
      /> 
      

      <div className='nav__icon-container' >
        <div className='nav__cart-container'>
          { !(productQuantity === 0) && <span className='nav__cart-number'>{productQuantity}</span> }
          <img onClick={changeShowMenu} src={CartIcon} alt='cart-icon'/>
        </div>
        <img className='nav__avatar-image' src={AvatarImage} alt='avatar' />
      </div>
    </nav>
  )
}

export { Navbar }