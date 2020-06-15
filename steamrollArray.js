// Flatten a nested array without using flat or flatMap methods.
function steamrollArray(arr,newArr=[]) { 

    arr.forEach(elem => Array.isArray(elem)?steamrollArray(elem,newArr):newArr.push(elem));
    
    return newArr;
}

// A clever way is to change it to string first and then transfer to array.
