/**
 * Created by jiajie on 17/5/4.
 */
function partition(node, x) {
	var beforeStart, beforeEnd, afterStart, afterEnd;

	while (node != null) {
		var next = node.next;
		node.next = null;
		if (node.data < x) {
			if (beforeStart == null) {
				beforeStart = node;
				beforeEnd = beforeEnd;
			} else {
				beforeEnd.next = node;
				beforeEnd = node;
			}
		} else {
			if (afterStart == null) {
				afterStart = node;
				afterEnd = afterStart;
			} else {
				afterEnd.next = node;
				afterEnd = node;
			}
		}
		node = next;
	}
	if (beforeStart == null) {
		return afterStart;
	}
	beforeEnd.next = afterStart;
	return beforeStart;
}

function partition2(node, x) {
	var beforeStart;
	var afterStart;

	while (node != null) {
		var next = node.next;
		if (node.data < x) {
			node.next = beforeStart;
			beforeStart = node;
		} else {
			node.next = afterStart;
			afterStart = node;
		}
		node = next;
	}

	if(beforeStart == null) {
		return afterStart;
	}
	var head = beforeStart;
	while(beforeStart != null) {
		beforeStart = beforeStart.next;
	}
	beforeStart.next = afterStart;
	return head;
}