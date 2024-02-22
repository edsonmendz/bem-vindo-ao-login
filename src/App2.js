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

            <img className='pol1' src='./imagens/Ellipse 22.png'></img>

            <img className='pol2' src='./imagens/Polygon 2.png'></img>

            <img className='pol3' src='./imagens/Polygon 3.png'></img>
            
            <div className='capsula'>            
                <h2>Bem Vindo ao <span className='azul'>Login</span></h2>
                <br></br><br></br>

                <p className='cinza'>Preencha os dados do login para acessar</p> 
                <br></br>

                <div className='id'>
                <label><b>Usuário</b></label>
                <br></br>
                <div className='inserir'>
                  <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  />
                  <img className='usuario' src='./imagens/usuario.png'></img>
                </div>                
                <br></br>
                <label><b>Senha</b></label>
                <br></br>
                  <div className='inserir'>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        />
                    <img className='' src='./imagens/esconder.png'></img>
                  </div>                
                </div>
                <button type="submit">ENTRAR</button>
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