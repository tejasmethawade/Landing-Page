import './Header.css';
import logo from "../img/logo.svg";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import { CgMenu, CgCloseR } from "react-icons/cg";

const Header = () => {
 
  const [toggle, settoggle] = useState(false);

  const hanndletoggle =()=>{
    console.log(toggle);
    settoggle(!toggle);
    
  }

  return (
    <>
      
      <div className="header">

        <div className="header-logo">
          <img src={logo} alt="logo"></img>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <div className={toggle?"header-tabs-active" :"header-tabs"}>
          <nav>
            <ul className="nav-menu">
              <li> <Link to="/about" style={{ textDecoration: 'none' }}>About Us</Link> </li>
              <li> <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link> </li>
              <li> <Link to="/courses" style={{ textDecoration: 'none' }}>Courses</Link> </li>  
            </ul>
          </nav>

          <div className='header-buttons' >
            <Link to="/dashboard" style={{ textDecoration: 'none' }} className='btn-dash'>Dashboard </Link>
            <Link to="/login"  className='btn-login'>Login &nbsp;<FiLogIn/></Link>
          </div>

        </div>

        

        <div className='hamburger' onClick={hanndletoggle}>
            <CgMenu className='mobile-nav-btn' size={30}/>
            <CgCloseR 
            className='mobile-nav-btn' 
            name='close-outline'
            size={20}/>
        </div>


      </div>

    </>
    
  )

}

export default Header