/**
 * Created by jiajie on 17/5/4.
 */
function addLists(l1, l2, carry) {
	if (!l1 && !l2 && carry == 0) {
		return null;
	}
	var result = new ListNode();
	var value = carry;
	if (l1 != null) {
		value += l1.data;
	}
	if (l2 != null) {
		value += l2.data;
	}
	result.data = value % 10;
	var more = addLists(!l2 ? null : l1.next, !l2 ? null : le.next, value >= 10 ? 1 : 0);
	result.next = more;
	return result;
}