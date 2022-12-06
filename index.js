function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function reverseString(string) {
  const stringLength = string.length;
  let result;
  for (let i = stringLength; i >= 0; i -= 1) {
    result += string.charAt(i);
  }
  return result;
}

export { capitalize, reverseString };
