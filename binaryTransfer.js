// The function will translate a binary string.
function binaryAgent(str) {
  return str.split(" ").map(binary=> String.fromCharCode(parseInt(binary, 2))).join('');
}
