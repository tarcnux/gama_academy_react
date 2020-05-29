import React, { useState } from 'react';
import axios from 'axios';

function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa() {
    //console.log(usuario);
    // usuários exemplos: ramosht, octocat
    axios.get(`https://api.github.com/users/${ usuario }/repos`).then(
      response => console.log(response.data)
    );
  }
  return (    //Retornando um fragment     
    <>             
      <p> { usuario } </p>
      <input placeholder="usuario" className="usuarioInput" 
            onChange={ e => setUsuario(e.target.value)} value={ usuario } />
      <button type="button" onClick={ handlePesquisa } >Pesquisar do uri</button>
    </>
  );
}

export default Home;
// JSX