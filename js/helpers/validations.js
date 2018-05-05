export function validateEmail(value) {
  if (!value) {
    return false;
  }
  return value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  );
}

export function validatePassword(value) {
  if (!value) {
    return false;
  }
  return value.match(/[\w\W]{8,}/g);
}
