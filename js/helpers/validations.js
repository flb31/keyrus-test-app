export function validateEmail(value) {
  const patt = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
  );
  return patt.test(value);
}

export function validatePassword(value) {
  const patt = new RegExp(/[\w\W]{8,}/g);
  return patt.test(value);
}
