import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/global.css";
import "../styles/products.css";
import { products } from '../productData';

const Products = () => {
    return (
        <div className="products__wrapper">
            <Navbar />
            <div className="page__inner__content">
                <h3 className="section__title">Confira nossos produtos</h3>
                <div className="subtitle__underline"></div>
                <div className="products__container">
                    <div className="colums colums__four">
                        {products.map((product, index) => (
                            <div className="product" key={index}>
                                <img src={product.image} alt={product.name} />
                                <p className="product__name">{product.name}</p>
                                <p
                                    className="rate"
                                    dangerouslySetInnerHTML={{ __html: product.rating }}
                                ></p>
                                <p className="product__nprice">{product.normalPrice}</p>
                                <p className="product__price">{product.price}</p>
                                <p className="product__payment">{product.payment}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
