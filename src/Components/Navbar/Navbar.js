import React from 'react';
import { useState, useEffect} from 'react';
import logo_large from '../../images/logo_large.svg';
import logo_small from '../../images/logo_small.svg';
import { NavLink } from 'react-router-dom';
import LangSwitch  from './Components/LangSwitch';
import './navbar.css';

function Navbar() {
  //make a state for if the window is scrolled or not
  const [scrolled, setScrolled] = useState(false);
  //check in useEffect if the window is scrolled or not
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    , [scrolled]);
    console.log(scrolled)
    return () => {
      window.removeEventListener('scroll', ()=>{});
    };
  }, [scrolled]);


  return (
    <nav className = {scrolled && 'scrolled'}>
        <div className="nav-wrapper">
            <div className="link-wrapper">
                <NavLink to="/" className={"navLink"}>Rólunk</NavLink>
                <img className='nav-logo' src={scrolled ? logo_small : logo_large} alt="" />
                <NavLink to="/termekek" className={"navLink"}>Termékeink</NavLink>
            </div>
           <LangSwitch />

        </div>
    </nav>
  )
}

export default Navbar