import { SEND_ALERT, REMOVE_ALERT } from './actions';

export function sendAlert(alert) {
  return { type: SEND_ALERT, payload: alert };
}

export function removeAlert(alertID) {
  return { type: REMOVE_ALERT, payload: alertID };
}