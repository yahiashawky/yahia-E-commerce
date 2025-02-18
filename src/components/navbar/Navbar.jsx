import React, { useState , useEffect } from 'react'
import { FaChevronDown , FaHeart , FaShoppingCart , FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import './navbar.css';
import { Link } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";


const Navbar = ({cartitems , watchlistitems , dark , changetheme}) => {
  let [openMenu,setopenMenu] = useState(false);

  function isopen(){
    setopenMenu(!openMenu);
  }
   close = () => {
    setopenMenu(false)
  }

  useEffect(() => {
  document.querySelector(".menu").onclick = function(){
    document.querySelector(".nav-middle ul").classList.toggle("open")
  }
  }, [])

  
  return (
    <nav>
      <div className="main-nav">
      <div className="nav-left">
        <Link to='/'>
        <h2>Bravo <span>Shop</span></h2>
        </Link>
      </div>
      <div className="nav-middle">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li className='products-link'><a href="#" onClick={isopen}>Products 
              <FaChevronDown/></a>
              {openMenu && 
                 <div className="products-toggle">
                  <Link  to="/fake" onClick={close}>Fake Api Products</Link>
                  <Link to="/dummy" onClick={close}>Dummy Api Products</Link>
                </div>
              }
              </li>
            <li><Link to="/contact">Contact</Link></li>
            {
              dark ? <li><MdOutlineWbSunny className='sun' onClick={changetheme}/></li> :
              <li><FaMoon className='moon' onClick={changetheme}/></li>
            }
            
            
        </ul>
        
      </div>
      <div className="nav-right">
        <div className="watchlist">
            <Link to='/watchlist'><FaHeart className='nav-icon'/> </Link>
            <span>({watchlistitems.length > 0 ? watchlistitems.length : (0)})</span>
        </div>
        <div className="shopping">
            <Link to='/cart'><FaShoppingCart className='nav-icon'/></Link>
            <span className='cart-counter'>({cartitems.length > 0 ? cartitems.length :(0)})</span>
        </div>
      </div>
      <CiMenuFries className='menu'/>
      </div>


    </nav>
  )
}

export default Navbar
