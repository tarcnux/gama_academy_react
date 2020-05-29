import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa() {
    //console.log(usuario);
    axios.get('https://api.github.com/users/tarcnux/repos').then(
      response => console.log(response)
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

export default App;
// JSX