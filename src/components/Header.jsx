import React from 'react';
import '../styles/global.css';

const Header = () => {
    return (
        <header>
            <div>
                <div className="header__inner__content">
                    <div className="header__bottom__side header__container">
                        <div className="header__bottom__side__left">
                            <h2>VOLANTE LOGITECH G920</h2>
                            <p>
                                Não está conseguindo acompanhar seus adversários?
                                Nunca mais perca uma corrida com nosso volante Logitech G920.
                                Jogue com muita emoção e seja o rei das pistas!
                            </p>
                            <button>VER MAIS</button>
                        </div>
                        <div className="header__bottom__side__right">
                            <img src="/images/products/product-header-section.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
