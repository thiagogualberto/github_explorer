import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

// "styled" - cria componente estilizado.
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px; /*Espaço entre as linhas do texto*/
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  margin-width: 700px;

  display: flex; /*Botão ficar ao lado do campo*/

  input {
    flex: 1; /*Input ocupa tudo do 700px, menos o botão.*/
    height: 70px;
    padding: 0 24px; /*Só nas laterais*/
    border: 0;
    border-radius: 5px 0 0 5px; /*Borda das laterais do conteúdo do input - SuperioreInferiorESQ*/
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold; /*Negrito*/
    /*Trocar o background-color do botão devagar*/
    transition: background-color 0.2s;

    &:hover {
      /*& me refiro ao próprio elemento
        Escurece o botão em 0.2
      */
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.form`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px; /*Espaçamento interno*/
    display: block; /*"a" vem por padrão inline*/
    text-decoration: none; /*Tirar underline por volta dos textos*/

    display: flex; /*Um elemento ficar ao lado do outro*/
    align-items: center;
    /*Velocidade de movimentação do hover*/
    transition: transform 0.2s;

    &:hover {
      /*Distanciar o "a" no eixoX 10px*/
      transform: translateX(10px);
    }

    & + a {
      /*Aplicado do 2º 'a' pra frente*/
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%; /*deixar img arredondada*/
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    /*Pega a estilização da setinha e formata */
    svg {
      margin-left: auto; /*Pega espaço disponível na esquerda e coloca como margem.*/
      color: #cbcbd6;
    }
  }
`;
