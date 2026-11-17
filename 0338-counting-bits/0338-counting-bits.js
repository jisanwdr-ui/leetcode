/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = []

    for( let i=0; i <= n ;i++){
        let count =0
        let num = i

        while (num > 0){
            count += num % 2
            num =Math.floor(num /2)
        }
        ans.push(count)
    }
    return ans
};