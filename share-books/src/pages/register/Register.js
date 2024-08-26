import React from 'react'
import './Register.css'

const Register = () => {

    return (
        <div className='principal-div div-register'>
            <p>Você ama livros? Cadastre-se agora em nosso site e compartilhe seus interesses literários com uma comunidade apaixonada! Descubra novos títulos, troque recomendações e conecte-se com outros leitores. Junte-se a nós e deixe sua paixão por livros inspirar novas conexões!</p>
            <h2>Cadastre-se</h2>

            <form className="form-register-page">
                <label for="displayName">Nome completo</label>
                <input type='text' id='displayName' placeholder='Nome completo' name='displayName'></input>

                <label for="email">Email</label>
                <input type='email' id='email' placeholder='Email' name='email'></input>

                <label for='birthday'>Data de nascimento</label>
                <input type='text' id='birthday' placeholder='01/01/1999' name='birthday'></input>

                <label for='password'>Senha</label>
                <input type='password' id='password' placeholder='Senha' name='password'></input>

                <label for='password-confirm'>Confirme sua senha</label>
                <input type='password' id='password-confirm' placeholder='confirme sua senha' name='password-confirm'></input>

                <span>A senha precisa ter no mínimo 1 algarismo</span>
                <span>A senha precisa ter uma letra maiúscula</span>
                <span>A senha precisa ter uma letra minúscula</span>
                <span>A senha precisa ter um símbulo</span>

                <button className='btn-register' type='submit'>Cadastrar</button>

            </form>
        </div>
    )
    
    

}
export default Register;
