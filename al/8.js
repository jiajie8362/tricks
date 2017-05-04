/**
 * Created by jiajie on 17/5/4.
 * String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	if (!str || str.length == 0) {
		return 0;
	}
	var i = 0;
	var negative = false;
	var result = 0;
	while (str[i] == ' ') {
		i++;
	}
	while (i<str.length) {
		if (str[i] == '-') {
			negative = true;
			i++;
		}else if (str[i] == '+') {
			i++;
		}
		if(str[i] >= '0' && str[i] <= '9') {
			var temp = result * 10 + parseInt(str[i], 10);
			if (temp < result || temp > 2147483647) {
				return negative ? -2147483648: 2147483647;
			}
			result = temp;
			i++;
		} else {
			break;
		}
	}
	if (negative) {
		return -result;
	}
	return result;
};

console.log(myAtoi('2147483648'))