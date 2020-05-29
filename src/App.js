import React, { useState } from 'react';

function App(props) {
  const [ usuario, setUsuario ] = useState('');
  return (    //Retornando um fragment 
    <>             
      <p> { usuario } </p>
      <input placeholder="usuario" className="usuarioInput" 
            onChange={ e => setUsuario(e.target.value)} />
      <button type="button">Pesquisar do uri</button>
    </>
  );
}

export default App;
// JSX