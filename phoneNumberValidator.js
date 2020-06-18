/* Valid numbers
123-456-7890
(213)568-7777
(109) 684-1983
098 724 1301
1092345876
1 555 555 5555
*/
function telephoneCheck(str) {
    const reg= /^1?\s?-?\s?(\d{3}|\(\d{3}\))\s?-?\d{3}-?\s?\d{4}$/;
  return reg.test(str);
}
// The trickest thing is to write regex for a pair of parentheses. I googled and found '\(([^()]*)\)' can match any characters
// in parentheses. 
