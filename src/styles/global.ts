import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

// CSS global da minha aplicação.
export default createGlobalStyle`
  /*Todos os elementos (*) tenham*/
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    /*Cor de fundo e imagem
      no-repeat - a imagem não se repete no background.
      70% alinhado pra direita e no topo da página.
    */
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;

    /*Deixa as letras mais bem definidas*/
    -webkit-font-smoothing: antialiased;
  }

  /*Fontes aplicadas nos três elementos abaixo*/
  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin:0 auto; /*Centralizar*/
    padding: 40px 20px; /*40_cima-embaixo e 20_dir-esq*/
  }

  /*Passar o botão por cima de um botão e destacar*/
  button {
    cursor: pointer;
  }
`;
