/**
 * Created by jiajie on 17/5/4.
 */
function deleteNode(n) {
	if (n == null || n.next == null) {
		return false;
	}
	var next = n.next;
	n.data = next.data;
	n.next = next.next;
	return true;
}