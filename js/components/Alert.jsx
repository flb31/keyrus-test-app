import React, { Component } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const typesAlert = { success: 'success', warning: 'warning', danger: 'danger', info: 'info' };

class Alert extends Component {
  state = {};

  componentDidMount() {
    // Dismiss automatically
    setTimeout( () => {
      this.handleDismiss();
    }, 3000);
  }

  handleDismiss = () => {
    this.props.handleAlert(this.props.alert.id);
  };

  render() {
    const { alert } = this.props;

    return (
      <BootstrapAlert className={`Alert Alert__${alert.type}`} bsStyle={alert.type} onDismiss={this.handleDismiss}>
        {alert.message}
      </BootstrapAlert>
    );
  }
}

Alert.propTypes = {
  alert: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    message: PropTypes.string
  }).isRequired,
  handleAlert: PropTypes.func.isRequired
};

export default Alert;
