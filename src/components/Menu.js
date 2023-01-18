import React from 'react'
import CloseIcon from './../images/icon-close.svg'
import './menu.css'

const Menu = (props) => {

    const {showMenu, setShowMenu } = props

    

    return (
        <div className={ showMenu ? 'menu__container active' : 'menu__container'}>
            <img onClick={() => setShowMenu(!showMenu)}  src={CloseIcon} alt='close-icon'/>
            <ul className='menu__items'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export { Menu }