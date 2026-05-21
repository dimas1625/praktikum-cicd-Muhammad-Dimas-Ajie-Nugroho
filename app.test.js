const { greet } = require('./index');

test('fungsi greet mengembalikan sapaan yang benar', () => {
  expect(greet('Dunia')).toBe('Halo, Dunia! Selamat datang di CI/CD.');
});