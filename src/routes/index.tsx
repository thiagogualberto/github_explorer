import React from 'react';
/**
 * Switch - Garante que apenas uma rota seja exibida.
 */
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/**
 * 'exact' dentro do Route faz com que o react-router-dom faça
 *  verificação de igualdade com a rota que se deseja acessar
 */
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
