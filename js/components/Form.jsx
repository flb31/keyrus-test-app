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
        <FormGroup className="m-b-none">

          <h4 className="Form__title m-b">Entra na minah conta</h4>

          <InputGroup className="m-quarter-b Form__group-input">
            <FormControl
              className="Form__group-input__input"
              type="text"
              placeholder="Email"
            />
            <InputGroup.Addon className="Form__group-input__icon-input">
              <Glyphicon className="Form__group-input__icon" glyph="user" />
            </InputGroup.Addon>
          </InputGroup>

          <InputGroup className="Form__group-input">
            <FormControl
              className="Form__group-input__input"
              type="text"
              placeholder="Senha"
            />
            <InputGroup.Addon className="Form__group-input__icon-input">
              <Glyphicon className="Form__group-input__icon" glyph="lock" />
            </InputGroup.Addon>
          </InputGroup>

          <Checkbox className="Form__check">
            Mantenha-me conectado
          </Checkbox>

          <Button className="Form__button" bsStyle="primary">Entrar</Button>

        </FormGroup>
      </form>
    );
  }
}

export default Form;
