import React, { Component } from 'react';
import uniqid from 'uniqid';
import Alert, { typesAlert } from './Alert';

class Alerts extends Component {
  state = {};

  renderAlerts = alerts => alerts.map(alert => <Alert key={uniqid()} alert={alert} />);

  render() {
    const alerts = [
      {
        type: typesAlert.success,
        message: 'a message'
      },
      {
        type: typesAlert.danger,
        message: 'a message'
      }
    ];

    return (
      <div className="Alerts">
        {this.renderAlerts(alerts)}
      </div>
    );
  }
}

export default Alerts;
