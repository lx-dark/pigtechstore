import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/contact.css';

const Contacts = () => {
    return (
        <div className="contact__wrapper">
            <Navbar />
            <div className="contact__container">
                <div className="page__contact">
                    <div className="about__section">
                        <h1>Sobre a IGTECH</h1>
                        <p>
                            Seja bem-vindo à IGTECH STORE. Nosso objetivo é oferecer produtos
                            de qualidade com um preço acessivel para todos os publicos. Temos
                            uma grande variedade de produtos e marcas para atender às suas
                            necessidades especificas.
                        </p>
                    </div>

                    <div className="contact__form">
                        <h1>Contatos</h1>
                        <p>
                            Para entrar em contato conosco, utilize o formulário abaixo e envie
                            um e-mail para <a href="mailto:contato@igtechstore.com">contato@igtechstore.com</a>.
                        </p>
                        <form>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" name="name" placeholder='Seu nome completo' required />

                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" name="email" placeholder='Seu e-mail' required />

                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" placeholder='Digite sua mensagem' required></textarea>

                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;
