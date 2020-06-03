## Problem
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
once it has been sorted. The returned value should be a number.

## Solution 1 -- Count numbers smaller than the target.

## Solution 2,3,4
Sort the array first. <br>
2. Then use for loop to find when target is larger than elements.<br>
3. Use do while loop which stops when target is not bigger than elements.<br>
4. Find index of currNum >= target, if it returns -1, which means target should be inserted at the end of the array.

## Solution 5 
Add the target into the array. // concat or push method
Sort.
Find the index of the target.

## Solution 6
Filters how many elements are smaller than the target.
