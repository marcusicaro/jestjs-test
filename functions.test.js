const { capitalize } = require('./functions');
const { reverseString } = require('./functions');
const { ceaserCipher } = require('./functions');
const { analyzeArray } = require('./functions');

// console.log(capitalize);

it('Testing capitalize function', () => {
  expect(capitalize('something')).toBe('Something');
});

it('Testing reverse string', () => {
  expect(reverseString('asd')).toBe('dsa');
});

it('Testing ceaser cypher characters - II', () => {
  expect(ceaserCipher('z..ABCZZ', 1)).toBe('a..BCDAA');
});

it('Testing analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
