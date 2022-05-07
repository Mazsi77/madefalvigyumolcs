import React from 'react';
import logo_large from '../../images/logo_large.svg';
import { NavLink } from 'react-router-dom';
import LangSwitch  from './Components/LangSwitch';
import './navbar.css';

function index() {
  return (
    <nav>
        <div className="nav-wrapper">
            <div className="link-wrapper">
                <NavLink to="/" className={"navLink"}>Rólunk</NavLink>
                <img src={logo_large} alt="" />
                <NavLink to="/termekek" className={"navLink"}>Termékeink</NavLink>
            </div>
           <LangSwitch />

        </div>
    </nav>
  )
}

export default index