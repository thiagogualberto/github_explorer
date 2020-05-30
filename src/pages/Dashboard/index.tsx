import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38990721?s=460&u=5d4ca1ddf0261c18b385de8c8d89d6aa08ccd9d9&v=4"
            alt="Thiago Gualberto"
          />
          <div>
            <strong>fastfeet-api</strong>
            <p>Shipping company full control system - REST API made with Node.js </p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38990721?s=460&u=5d4ca1ddf0261c18b385de8c8d89d6aa08ccd9d9&v=4"
            alt="Thiago Gualberto"
          />
          <div>
            <strong>fastfeet-api</strong>
            <p>Shipping company full control system - REST API made with Node.js </p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/38990721?s=460&u=5d4ca1ddf0261c18b385de8c8d89d6aa08ccd9d9&v=4"
            alt="Thiago Gualberto"
          />
          <div>
            <strong>fastfeet-api</strong>
            <p>Shipping company full control system - REST API made with Node.js </p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
