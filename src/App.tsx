import React from 'react';

// Faz com que o acesso às rotas sejam a partir do "/"
import { BrowserRouter } from 'react-router-dom';

// Estilização global da aplicação.
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
