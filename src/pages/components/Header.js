import React, { Component } from 'react';
import { Link } from "gatsby";
import Menu from './Menu';
import Logo from '../../assets/images/logo.png';
import Open from '../../assets/icons/open.svg';
import user from '../../assets/images/user.png';

export default class Header extends Component{

  open(){
      const menu = document.getElementById('menu');
      menu.style.transition = "all .3s ease-in-out";
      menu.style.transform = "translateX(0)";
  }

  render() {
    return (
      <>
        <header className="header">

          <div className="header__logo">
            <Link to="/">
              <img src={Logo} alt="logo"/>
            </Link>
          </div>          
      
          <nav className="header__navigation">
            <Link to="/#history">Historia</Link>
            <Link to="/#benefits">Beneficios</Link>
            <Link to="/#products">Productos</Link>
            <Link to="/#gallery">Galería</Link>
            <Link to="/#catalog">Catálogo</Link>
          </nav>

          <div className="header__user">
            <a href="">
              <img src={user} alt="user"/>
            </a>
          </div>
      
          <div className="header__menu">
            <button onClick={this.open}><img src={Open} alt="open" /></button>
          </div>
       
        </header>

        <Menu />

      </>
    )
  }
}
