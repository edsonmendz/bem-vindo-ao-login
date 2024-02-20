import React, { useState } from 'react';
import './App.css';

function App2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a validação do login, como enviar uma solicitação para um backend
    // Aqui estamos apenas simulando um login válido com 'user' e 'password'
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h2>Você está logado!</h2>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <form className='formulario' onSubmit={handleLogin}>

            <img src='../public/imagens/Elipse 22.png'></img>
            
            <div className='capsula'>            
                <h2>Bem Vindo ao <span className='azul'>Login</span></h2>
                <br></br>

                <p className='cinza'>Preencha os dados do login para acessar</p> 

                <div className='esquerda'>
                <label>Usuário</label>
                <br></br>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label>Senha</label>
                <br></br>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>} 
            </div>
            <div className='facalogin'>
                <h4>Faça login em nossa</h4>
                <h3>Plataforma</h3>
            </div>
        </form>
      )}
    </div>
  );
}

export default App2;