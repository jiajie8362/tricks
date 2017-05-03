/**
 * Created by jiajie on 17/5/3.
 */
// Reverse Integer
// Reverse digits of an integer.
//
// 	Example1: x = 123, return 321
// Example2: x = -123, return -321
//
// click to show spoilers.
//
// 	Note:
// The input is assumegid to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var negative = (x < 0);
	var result = 0;
	x = Math.abs(x)
	while (x >0) {
		result = result * 10 + x % 10;
		if (result > 2147483648) {
			return 0;
		}
		x = parseInt(x / 10);
	}

	return negative ? -result : result;
};

console.log(reverse(1534236469))