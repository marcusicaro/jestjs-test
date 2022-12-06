function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function reverseString(string) {
  const stringLength = string.length;
  let result = '';
  for (let i = stringLength; i >= 0; i -= 1) {
    result += string.charAt(i);
  }
  return result;
}

function ceaserCipher(string, shift) {
  let lowerCaseString = string.toLowerCase();
  const encryptArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'x',
    'w',
    'y',
    'z',
  ];
  let resultString = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (!encryptArray.includes(lowerCaseString[i])) {
      resultString += lowerCaseString[i];
      continue;
    }
    let index = encryptArray.indexOf(lowerCaseString[i]);
    let finalShift = index + shift;
    if (finalShift > 25) {
      finalShift = (finalShift % 25) - 1;
      resultString += encryptArray[finalShift];
      continue;
    }
    resultString += encryptArray[finalShift];
  }
  return resultString;
}

function analyzeArray(array) {
  const { length } = array;
  let min;
  let average = 0;
  let max;

  function minElement(e) {
    if (!min || e < min) {
      min = e;
    }
  }

  function maxElement(e) {
    if (!max || e > max) {
      max = e;
    }
  }

  array.forEach((element) => {
    minElement(element);
    maxElement(element);
    average += element;
  });
  average = Math.round(average / array.length);

  return { average, min, max, length };
}

module.exports = { capitalize, reverseString, ceaserCipher, analyzeArray };
