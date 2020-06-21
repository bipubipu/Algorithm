// This program convert numbers into a roman numeral. But it only applies to number in range [1, 3999]. I find it very hard to 
// handle 4 and 9, so I just define it in advance.

function convertToRoman(num) {
  const roman =["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romNum ='';
  for (let i =0; i< number.length;i++){
      while (number[i] <= num) {
      romNum += roman[i];
      num -= number[i];
    }
  }
  return romNum;
}
