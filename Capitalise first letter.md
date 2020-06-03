## Problem
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

## Solution 1 -- RegEx
```
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, x=>x.toUpperCase());
}
```
## Solution 2 -- map
```
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val[0].toUpperCase() + val.slice(1);
  });
  return result.join(" ");
}
```
