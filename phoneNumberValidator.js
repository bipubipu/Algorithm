/* Valid numbers
123-456-7890
(213)568-7777
(109) 684-1983
098 724 1301
1092345876
1 555 555 5555
*/
function telephoneCheck(str) {
    const reg1= /^1?\s?-?\s?\d{3}\s?-?\d{3}-?\s?\d{4}$/;
    const reg2= /^1?\s?-?\s?\(\d{3}\)\s?-?\d{3}-?\s?\d{4}$/;
  return reg1.test(str)||reg2.test(str);
}
