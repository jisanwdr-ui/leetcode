/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let num = x^ y
    let count = 0
     while (num > 0){
        count += num & 1
        num =num >> 1
     }
     return count
};