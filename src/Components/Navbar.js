import { useState } from "react";
import React from 'react';
import HeartIcon from '../images/icons/211754_heart_icon.png';
import EcommerceIcon from "../images/icons/8608586_ecommerce_bag_icon.png";


const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false);
  return (
    <div> 
        <nav>
        <div className="paper">
            <div className="menu">
                <div className="menubar">
                    <div className="bar" id="bar1"></div>
                    <div className="bar" id="bar2"></div>
                </div>
                <div className="logo">
                    <a href="#"><h3>tm</h3><h3>Chairs.</h3></a>
                </div>
            </div>
            <div className="mlinks">
                <ul>
                    <li><a href="#"><span>01</span>Home</a></li>
                    <li><a href="#"><span>02</span>About</a></li>
                    <li><a href="#"><span>03</span>Projects</a></li>
                    <li><a href="#"><span>04</span>contact</a></li>
                </ul>
            </div>
            <div className="bgs">
                <div className="hrt"><a href="#"><img src={HeartIcon} alt="" /></a></div>
                <div className="cash"><span>$0.00</span></div>
                <div className="bg"><a href="#"><img src={EcommerceIcon} alt="" /></a></div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar