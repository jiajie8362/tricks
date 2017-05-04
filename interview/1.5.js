/**
 * Created by jiajie on 17/5/4.
 */
function countCompression(str) {
	if (!str) {
		return 0;
	}
	var last = str[0];
	var size = 0;
	var count = 1;
	for (var i = 1;i<str.length;i++) {
		if(str[i] == last) {
			count ++;
		} else {
			last = str[i];
			size += 1 + (count+'').length;
		}
	}
	size += 1 +  (count+'').length;
	return size;
}
function compress(str) {
	var size = countCompression(str);
	if(size>=str.length) {
		return str;
	}
	var newStr = [];
	var last = str[0];
	var count = 1;
	for(var i = 1;i<str.length;i++) {
		if(str[i] == last) {
			count ++ ;
		} else {
			newStr.push(last);
			newStr.push(count);
			count = 1;
		}
	}
	newStr.push(last);
	newStr.push(count);
	return newStr.join('');
}