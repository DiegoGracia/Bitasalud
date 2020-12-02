import React, { Component } from 'react';
import { Link } from "gatsby";
import Close from '../../assets/icons/close.svg';

export default class Menu extends Component{

  close(){
      const menu = document.getElementById('menu');
      menu.style.transition = "all .3s ease-in-out";
      menu.style.transform = "translateX(100vw)";
  }

  render() {
    return (
      <>
        <div className="menu js-menu" id="menu" role="menu">

          <div className="menu__close">
            <button onClick={this.close}><img src={Close} alt="close" /></button>
          </div>

          <nav className="menu__navigation">
            <Link onClick={this.close} to="/#history">Historia</Link>
            <Link onClick={this.close} to="/#benefits">Beneficios</Link>
            <Link onClick={this.close} to="/#products">Productos</Link>
            <Link onClick={this.close} to="/#gallery">Galería</Link>
            <Link onClick={this.close} to="/#catalog">Catálogo</Link>
          </nav>

        </div>      
      </>
    )
  }
}
