/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let digits = [...new Set(s)].filter(char => char >= '0' && char <= '9'); 
   digits.sort((a,b) => b-a)

 return digits.length >= 2 ? Number(digits[1]) : -1;
 };