import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function Home(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  function handlePesquisa() {
    //console.log(usuario);
    // usuários exemplos: ramosht, octocat
    axios.get(`https://api.github.com/users/${ usuario }/repos`)
    .then(
      response => {
        const repos = response.data;
        const reposName = [];
        repos.map((repo) => {
          reposName.push(repo.name);
        });
        //console.log(reposName);
        localStorage.setItem('reposName', JSON.stringify(reposName));       
        setErro(false);
        history.push('/repos');
      })
      .catch(err => {
        setErro(true);
      });
  }
  return (    //Retornando um fragment   
    <S.HomeContainer>

      <S.Content>             
        {/* <p> { usuario } </p> */}
        <S.Input placeholder="usuario" className="usuarioInput" 
              onChange={ e => setUsuario(e.target.value)} value={ usuario } />
        <S.Button type="button" onClick={ handlePesquisa } >
          Pesquisar repositórios
        </S.Button>              
      </S.Content>

      { erro ? <S.ErrorMsg>Usuário não encontrado.</S.ErrorMsg> : ''}

    </S.HomeContainer>  
  );
}

export default Home;
// JSX