/**
 * 实现一个算法,确定一个字符串的所有字符是否全都不同。假使不允许使用额外的数据结构, 又该如何处理
 */
function isUnique1(str) {
	if(str.length > 256) {
		return false;
	}

	var char_set = [];
	for(var i =0;i<str.length;i++) {
		if(char_set[str[i]]) {
			return false;
		}
		char_set[str[i]] = true;
	}
	return true;
}

function isUnique2() {
	if(str.length > 256) {
		return false;
	}
	var checker = 0;
	for (var i =0;i<str.length;i++) {
		var val = str[i] - 'a';
		if((checker & (1<< val)) > 0) {
			return false;
		}
		checker |= ( 1<< val);
	}
	return true;
}