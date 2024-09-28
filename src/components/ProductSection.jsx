import React from 'react';
import '../styles/global.css';

const ProductSection = ({ title, products }) => {
    return (
        <div className="page__inner__content">
            <h3 className="section__title">{title}</h3>
            <div className="subtitle__underline"></div>
            <div className="colums colums__four">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <img src={product.image} alt="" />
                        <p className="product__name">{product.name}</p>
                        <p className="rate" dangerouslySetInnerHTML={{ __html: product.rating }}></p>
                        <p className="product__nprice">{product.normalPrice}</p>
                        <p className="product__price">{product.price}</p>
                        <p className="product__payment">{product.payment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
