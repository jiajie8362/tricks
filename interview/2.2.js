/**
 * Created by jiajie on 17/5/4.
 */
function nthToLast(head, k) {
	if (k <= 0) return null;
	var p1 = head;
	var p2 = head;
	for (var i = 0; i < k - 1; i++) {
		if (p2 == null)return null;
		p2 = p2.next;
	}
	if (p2 == null)return null;
	while (p2.next != null) {
		p1 = p1.next;
		p2 = p2.next;
	}
	return p1;
}