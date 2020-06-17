//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects 
one argument and returns the sum. If either argument isn't a valid number, return undefined.

// This is the most difficult challenge for me now.

function addTogether(first, second) {
  if (typeof first!= 'number')
    return undefined;
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
