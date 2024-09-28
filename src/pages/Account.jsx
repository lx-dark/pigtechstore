import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
import '../styles/account.css';

const Account = () => {
    return (
        <div className="account__wrapper">
            <Navbar />
            <div className="account__container">
                <div className="account__form">
                    <h1>Minha Conta</h1>
                    <p>
                        Faça login para acessar sua conta. Se você ainda não tem uma conta,
                        crie uma agora.
                    </p>
                    <form>
                        <label htmlFor="username">E-mail:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Digite seu e-mail"
                            required />
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Digite sua senha"
                            required />
                        <button type="submit">Login</button>
                    </form>
                    <p className='create__account'>Não tem uma conta? <a href="/register">Crie uma</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Account;
