import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
    const handleMenuClick = () => {
        document.querySelector(".navbar").classList.toggle("show__menu");
    };

    return (
        <div className="navbar show__menu">
            <div className="header__inner__content">
                <img src="/images/igtech-logo-trans.png" alt='logo' className="logo" />
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/products">PRODUTOS</Link></li>
                        <li><Link to="/contacts">CONTATO</Link></li>
                        <li><Link to="/account">CONTA</Link></li>
                    </ul>
                </nav>
                <div className="nav__icon__container">
                    <img src="/images/cart.png" alt="" />
                    <img src="/images/menu.png" alt="" className="menu__button" onClick={handleMenuClick} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
