import React from 'react'
import bag from '../../assets/images/bag.png'
import './Navbar.css'
import {MdSearch} from 'react-icons/md'
import { FaShoppingCart } from "react-icons/fa"


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='secContainer'>
        <div className='imgContainer'>
          <img src={bag}/>
          <p>Shopsy</p>
        </div>
      <div className='sideContainer'>
        <div className='inputs'>
        <input type="search" placeholder='search' />
        <div className="icon">
        <MdSearch />
        </div>
        </div>
        <button className='cart'>
          <span className='group-hover:block hidden'>Order</span>
          <FaShoppingCart />
        </button>
      </div>
      </div>
    </div>
  )
}

export default Navbar