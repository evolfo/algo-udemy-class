const vowels = require('./index');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('Tali Rubinstein')).toEqual(6);
});

test('returns the number of vowels used', () => {
  expect(vowels('aaaaaaa')).toEqual(7);
});

test('returns the number of vowels used', () => {
  expect(vowels('')).toEqual(0);
});

test('returns the number of vowels used', () => {
  expect(vowels('&&*&&*@&*&@@&A(*(')).toEqual(1);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});
