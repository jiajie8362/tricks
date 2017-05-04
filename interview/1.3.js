/**
 * Created by jiajie on 17/5/4.
 */
function permutation(s, t) {
	if (s.length != t.length) {
		return false;
	}
	var letters = [];
	for (var i =0;i<s.length;i++) {
		letters[s[i]] ++;
	}
	for(var i=0;i<t.length;i++) {
		var c = parseInt(t[i], 10);
		if(--letters[c] < 0){
			return false;
		}
	}
	return true;
}