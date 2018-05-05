import { validateEmail, validatePassword } from '../../helpers/validations';

describe('Email Test', () => {
  test('should validate email', () => {
    const res = validateEmail('fabian@email.com');
    expect(res).toEqual(true);
  });

  test('Invalid email empty', () => {
    const res = validateEmail();
    expect(res).toEqual(false);
  });

  test('Invalid email text', () => {
    const res = validateEmail('fabian');
    expect(res).toEqual(false);
  });

  test('Invalid email without .com', () => {
    const res = validateEmail('fabian@correo');
    expect(res).toEqual(false);
  });

  test('Invalid email without @', () => {
    const res = validateEmail('fabiancorreo.com');
    expect(res).toEqual(false);
  });

  test('Invalid email with end point', () => {
    const res = validateEmail('fabian@correo.com.');
    expect(res).toEqual(false);
  });
});

describe('Password Test', () => {
  test('Should validate password', () => {
    const res = validatePassword('akldjf893__&');
    expect(res).toEqual(true);
  });

  test('Invalid email short', () => {
    const res = validatePassword('123');
    expect(res).toEqual(false);
  });
});
