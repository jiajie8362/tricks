/**
 * Created by jiajie on 17/5/4.
 */
function isRotation(s1 ,s2) {
	if(s1.length == s2.length) {
		var s1s1 = s1 + s1;
		return isSubstring(s1s1, s2);
	}
	return false;
}