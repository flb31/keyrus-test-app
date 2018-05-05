import React, { Component } from 'react';
import { Button, FormGroup, FormControl, InputGroup, Glyphicon, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import * as Validations from '../helpers/validations';
import { sendAlert } from '../actions/actionCreators';

class Form extends Component {
  state = {};

  handleForm = event => {
    event.preventDefault();
    const { email, password } = this.form;

    if (!Validations.validateEmail(email.value)) {
      this.props.handleAlert({
        id: uniqid(),
        type: 'danger',
        message: 'Email is not valid.'
      });
      return;
    }

    if (!Validations.validatePassword(password.value)) {
      this.props.handleAlert({
        type: 'danger',
        message: 'Password is not valid. Minimun 8 chars.'
      });
      return;
    }

    // success message
    this.props.handleAlert({
      type: 'success',
      message: 'Success Login.'
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleForm}
        ref={form => {
          this.form = form;
        }}
        className="Form"
      >
        <FormGroup className="m-b-none">

          <h4 className="Form__title m-b">Entra na minah conta</h4>

          <InputGroup className="m-quarter-b Form__group-input">
            <FormControl
              ref={input => {
                this.email = input;
              }}
              className="Form__group-input__input"
              type="text"
              name="email"
              placeholder="Email"
            />
            <InputGroup.Addon className="Form__group-input__icon-input">
              <Glyphicon className="Form__group-input__icon" glyph="user" />
            </InputGroup.Addon>
          </InputGroup>

          <InputGroup className="Form__group-input">
            <FormControl
              ref={input => {
                this.password = input;
              }}
              className="Form__group-input__input"
              type="password"
              name="password"
              placeholder="Senha"
            />
            <InputGroup.Addon className="Form__group-input__icon-input">
              <Glyphicon className="Form__group-input__icon" glyph="lock" />
            </InputGroup.Addon>
          </InputGroup>

          <Checkbox className="Form__check">
            Mantenha-me conectado
          </Checkbox>

          <Button onClick={this.handleForm} className="Form__button" bsStyle="primary">Entrar</Button>

        </FormGroup>
      </form>
    );
  }
}

Form.propTypes = {
  handleAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ alerts: state.alerts });

const mapDispatchToProps = dispatch => ({
  handleAlert(alert) {
    dispatch(sendAlert(alert));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
