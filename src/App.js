import React, { useState } from 'react';

function App(props) {
  return (    //Retornando um fragment 
    <>       
      <input placeholder="usuario" id="usuario" 
           className="usuarioInput" name="usuario" />
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
// JSX