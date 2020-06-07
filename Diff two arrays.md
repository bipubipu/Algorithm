## Problem

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

## Analysis

There're a few ways tackling this problem. My first thought is to go through the first array and see if they appear in the 
second, then do this again in the second array. 

```
function diffArray(arr1, arr2) {
  var newArr = arr1.filter(elem => arr2.indexOf(elem)<0);
  return newArr.concat(arr2.filter(elem => arr1.indexOf(elem)<0));
}
```
When I actually implement this, I came across a problem. '[]' is in the answer. I realised that I used push method first. I will get an array after using filter, which is not suitable to use push as push applies to single element. So I took another way to merge arrays, which is concat.

## Other solutions
```
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
```
