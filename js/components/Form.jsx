import React, { Component } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  InputGroup,
  Glyphicon,
  Checkbox
} from 'react-bootstrap';

class Form extends Component {
  state = {};
  render() {
    return (
      <form className="Form">
        <FormGroup>
          <h4>Entra na minah conta</h4>
          <InputGroup>
            <FormControl type="text" placeholder="Email" />
            <InputGroup.Addon>
              <Glyphicon glyph="user" />
            </InputGroup.Addon>
          </InputGroup>

          <InputGroup>
            <FormControl type="text" placeholder="Senha" />
            <InputGroup.Addon>
              <Glyphicon glyph="lock" />
            </InputGroup.Addon>
          </InputGroup>
          <Checkbox>
            Mantenha-me conectado
          </Checkbox>
          <Button bsStyle="primary">Entrar</Button>
        </FormGroup>
      </form>
    );
  }
}

export default Form;
