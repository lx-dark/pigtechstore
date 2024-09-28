import React from 'react';
import '../styles/global.css';
import '../styles/footer.css';

function Footer() {
    return (
        <footer>
            <div className='page__inner__content'>
                <div className='footer__information'>
                    <img src='/images/igtech-logo-trans.png' alt='' className='baselogoigtech' />
                    <div className="contact__info">
                        <h2>Contato</h2>
                        <p>E-mail: contato@igtech.com.br</p>
                        <p>Telefone: (75) 9 9881-6777</p>
                    </div>
                    <div className="adress__info">
                        <h2>Endereço</h2>
                        <p>Rua Tal, 104, Centro, Alagoinhas-Ba</p>
                    </div>
                    <div className="social__info">
                        <h2 className="social__title">Siga-nos</h2>
                        <div className="social__links">
                            <a
                                href="https://pt-br.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/facebook-icon.png" alt="facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/instagram-icon.png" alt="instagram" />
                            </a>
                            <a
                                href="https://www.linkedin.com/login/pt"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/linkedin-icon.jpeg" alt="linkedin" />
                            </a>
                            <a
                                href="https://wa.me/5575998816777"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/images/whatsapp-icon.png" alt="whatsapp" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
