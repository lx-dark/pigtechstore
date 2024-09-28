import React from 'react';
import '../styles/global.css';

const ExclusiveSection = () => {
    return (
        <div className="gray__background">
            <div className="header__inner__content">
                <div className="header__bottom__side exclusive__container">
                    <div className="header__bottom__side__left">
                        <h2>PLAYSTATION 5 PRO</h2>
                        <p>
                            Experimente o verdadeiro poder nos consoles com o novo Playstation 5 Pro
                            e jogue em 4K com graficos impressionantes
                        </p>
                        <button>VER MAIS</button>
                    </div>
                    <div className="header__bottom__side__right">
                        <img src="./images/products/product-exclusive-section.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveSection;
