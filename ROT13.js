// In this cipher, values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

function rot13(str) {
  return str.toUpperCase().replace(/[A-Z]/g,match => 
     String.fromCharCode(match.charCodeAt(0)%26+65)
  );
}

// My solution is to compare the value of new Value with 'Z', if it is out of the range, it will start from 'A' again. 
// var newValue =  match.charCodeAt(0);
// String.fromCharCode(newValue>90?newValue-90+64:newValue)
