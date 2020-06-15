function checkPrime(num){
  let i = Math.floor(Math.sqrt(num));
  for(let j = 2; j <= i; j++){
      if (num % j == 0) return false;
    }
    return num !== 1 && num !== 0;
}
