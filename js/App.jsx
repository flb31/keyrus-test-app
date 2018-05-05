import React from 'react';

import Form from './components/Form';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Form />

    <div className="password">
      <p>Precisa de uma conta?</p>
      <a href="/">Increver-se</a>
    </div>

    <div className="sign-up">
      <p>Esqueceu sua senha?</p>
      <a href="/">Clique aqui.</a>
    </div>

    <Footer />

  </div>
);

export default App;
