import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repos() {
  const [ repos, setRepos ] = useState([]);
  const history = useHistory();

  useEffect(() => {    
    let reposName = localStorage.getItem('reposName');
    if(!reposName) {
      history.push('/')
    }
    reposName = JSON.parse(reposName);
    //console.log(reposName);
    setRepos(reposName);
    localStorage.clear();
  }, []);
  return (
    <S.Container>
      <S.Title>Repositórios Github</S.Title>
      <S.List>
        {/* Programação declarativa */}
        { repos.map(repo => {          
          return (
          <S.ListItem>Repositório: { repo }</S.ListItem>
          )
        }) }
      </S.List>
    </S.Container>
  )
}
