## Problem
Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

## Solution 1 Create a new array
```
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
```

## Solution 2 Change the original array
```
function bouncer(arr) {
  for (let i =0; i< arr.length; i++){
    if (! arr[i]){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}
```

## Solution 3
```
function bouncer(arr) {
  return arr.filter(Boolean);
}
```
Boolean is a built-in function which returns the value of the expression.
