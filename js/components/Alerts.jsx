import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Alert from './Alert';
import { removeAlert } from '../actions/actionCreators';

class Alerts extends Component {
  state = {};

  renderAlerts = alerts => {
    const keysAlert = Object.keys(alerts);

    return keysAlert.map(key => {
      const alert = alerts[key];
      return <Alert key={key} handleAlert={this.props.handleAlert} alert={alert} />;
    });
  };

  render() {
    const { alerts } = this.props;

    return (
      <div className="Alerts">
        <ReactCSSTransitionGroup transitionName="Alert" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
          {this.renderAlerts(alerts)}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = state => ({ alerts: state.alerts });

const mapDispatchToProps = dispatch => ({
  handleAlert(alertId) {
    dispatch(removeAlert(alertId));
  }
});

Alerts.propTypes = {
  alerts: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }).isRequired,
  handleAlert: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
