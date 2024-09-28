import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import User from '../User';
import '../styles/global.css';
import '../styles/register.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpf: '',
        birthdate: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        cep: '',
        street: '',
        neighborhood: '',
        city: '',
        state: '',
        houseNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (name === 'cep' && value.length === 8) {
            fetchAddressFromCep(value);
        }
    };

    const fetchAddressFromCep = async (cep) => {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (data.erro) {
                alert('CEP não encontrado!');
                return;
            }

            setFormData((prevState) => ({
                ...prevState,
                street: data.logradouro,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf,
            }));
        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
            alert('Erro ao buscar o CEP.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const newUser = new User(
                formData.name,
                formData.email,
                formData.cpf,
                formData.birthdate,
                formData.password,
                formData.confirmPassword,
                formData.phoneNumber,
                formData.cep,
                formData.street,
                formData.neighborhood,
                formData.city,
                formData.state,
                formData.houseNumber
            );
            newUser.register();
            alert('Usuário registrado com sucesso!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="register__wrapper">
            <Navbar />
            <div className="register__container">
                <div className="form__container">
                    <h1>Criar Conta</h1>
                    <p>Preencha o formulário abaixo para criar uma nova conta.</p>
                    <div className="register__form">
                        <form onSubmit={handleSubmit}>
                            <label>Nome:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" />

                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu e-mail" />

                            <label>CPF:</label>
                            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="Digite seu CPF" />

                            <label>Data de Nascimento:</label>
                            <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} />

                            <label>Senha:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Crie uma senha" />

                            <label>Confirmar Senha:</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirme sua senha" />

                            <label>Telefone:</label>
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Seu telefone" />

                            <label>CEP:</label>
                            <input type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="Qual o seu CEP?" />

                            <label>Rua:</label>
                            <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Logradouro" />

                            <label>Bairro:</label>
                            <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} placeholder="Bairro" />

                            <label>Cidade:</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Cidade" />

                            <label>Estado:</label>
                            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Estado" />

                            <label>Número da Casa:</label>
                            <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleChange} placeholder="Ex: 000" />

                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
