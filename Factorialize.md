## Problem
Reverse a string without using reverse method.

## Solution 1 - Recursion
```
function factorial(n){
  if (n===0)  return 1;
  return n*factorial(n-1);
}
```
## Solution 2 - Tail recursion
```
function factorial(num, f = 1) {
  if (num == 0) {
    return f;
  } else {
    return factorial(num - 1, f * num);
  }
}
```
Tail recursion optimizes the the memory use.
