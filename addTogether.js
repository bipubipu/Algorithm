//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects 
// one argument and returns the sum. If either argument isn't a valid number, return undefined.

// This is the most difficult challenge for me now.

function addTogether(first, second) {
  if (typeof first!= 'number')
    return undefined;
  if (typeof second == "number") 
    return first + second;
  if (typeof second === "undefined") 
    return result => addTogether(first, result);
}
