import React from 'react';

import Form from './components/Form';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Form />

    <div className="password m-t m-half-b">
      <p>Precisa de uma conta?</p>
      <a href="/">&nbsp;Increver-se</a>
    </div>

    <div className="sign-up">
      <p className="m-quarter-r">Esqueceu sua senha?</p>
      <a href="/">Clique aqui.</a>
    </div>

    <Footer theClasses="m-double-t" />

  </div>
);

export default App;
