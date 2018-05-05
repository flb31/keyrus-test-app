import React, { Component } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const typesAlert = { success: 'success', warning: 'warning', danger: 'danger', info: 'info' };

class Alert extends Component {
  state = {
    showAlert: true
  };

  handleDismiss = () => {
    this.setState({ showAlert: false });
  };

  render() {
    const { alert } = this.props;
    
    if(!this.state.showAlert) {
        return null;
    }

    return <BootstrapAlert bsStyle={alert.type} onDismiss={this.handleDismiss}>{alert.message}</BootstrapAlert>;
  }
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }).isRequired
};

export default Alert;
