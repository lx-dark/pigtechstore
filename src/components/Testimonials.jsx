import React from 'react';
import '../styles/global.css';

const Testimonials = () => {
    const reviews = [
        {
            text: "Loja muito boa, já fiz mais de 3 compras e a entrega foi bem rapida chegou tudo certinho. Recomendo",
            rating: "&#9733;&#9733;&#9733;&#9733;&#9733;",
            name: "Carlos Santos"
        },
        {
            text: "Recomendo",
            rating: "&#9733;&#9733;&#9733;&#9733;&#9733;",
            name: "David Fonseca"
        },
        {
            text: "Comprei meio desconfiado na promoção, mas os produtos chegaram antes do prazo e bem embalados.",
            rating: "&#9733;&#9733;&#9733;&#9733;&#9734;",
            name: "Paulo Oliveira"
        },
        {
            text: "Otimo atendimento.",
            rating: "&#9733;&#9733;&#9733;&#9733;&#9733;",
            name: "Mauricio Teles"
        }
    ];

    return (
        <div className="page__inner__content">
            <h3 className="section__title">Avaliações</h3>
            <div className="avaliations">
                {reviews.map((review, index) => (
                    <div className="avaliation" key={index}>
                        <p>"</p>
                        <p>{review.text}</p>
                        <p className="rate" dangerouslySetInnerHTML={{ __html: review.rating }}></p>
                        <p>{review.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
