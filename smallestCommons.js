// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all 
// sequential numbers in the range between these parameters.

function smallestCommons(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b / gcd(a, b));
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = max;
  while (min < max) result =lcm(min++, result);
  return result;
}
