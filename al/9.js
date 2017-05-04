/**
 * Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if(x<0)
		return false;
	var temp = Math.abs(x)
	var res = 0;
	while (temp>0) {
		res = res * 10 + temp % 10;
		temp = parseInt(temp / 10);
	}
	console.log(res)
	return res == Math.abs(x);
};

// console.log(isPalindrome(123))
console.log(isPalindrome(-2147447412))
