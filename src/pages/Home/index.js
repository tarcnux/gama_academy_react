import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa() {
    //console.log(usuario);
    // usuários exemplos: ramosht, octocat
    axios.get(`https://api.github.com/users/${ usuario }/repos`).then(
      response => {
        const repos = response.data;
        const reposName = [];
        repos.map((repo) => {
          reposName.push(repo.name);
        });
        //console.log(reposName);
        localStorage.setItem('reposName', JSON.stringify(reposName));       
      });
  }
  return (    //Retornando um fragment     
    <S.Container>             
      {/* <p> { usuario } </p> */}
      <S.Input placeholder="usuario" className="usuarioInput" 
            onChange={ e => setUsuario(e.target.value)} value={ usuario } />
      <S.Button type="button" onClick={ handlePesquisa } >
        Pesquisar do uri
      </S.Button>
    </S.Container>
  );
}

export default Home;
// JSX