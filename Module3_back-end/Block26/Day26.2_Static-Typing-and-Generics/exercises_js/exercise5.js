"use strict";
function myFilter(array, callback) {
    const newArray = [];
    for (let index = 0; index < array.length; index += 1) {
        if (callback(array[index], index, array)) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}
console.log(myFilter([1, 2, 3], (item, index, array) => item < 3));
console.log(myFilter(['hi', 'hello', 'bye'], (item) => item.length > 2));
