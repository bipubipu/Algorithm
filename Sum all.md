## Problem
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

## Analysis
Though the official solution didn't mention, I think the first thing we need to do is to check input. The input has to be an
array of two integers.

## Solutions
My favourite one is to use the formula: sum = (startNum + endNum) * count/2. Other methods can use for loop to go through all 
numbers between the min and max of the input.
