## Problem
Split an array (first argument) into groups the length of size (second argument) and return them as a two-dimensional array.

## Solution 1

```
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i =0; i < arr.length; i+=size){
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}
```

## Solution 2

Use splice to remove elements.

```
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
```
