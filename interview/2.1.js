/**
 * Created by jiajie on 17/5/4.
 */
function deleteDups1(n) {
	var table = {};
	var pre = null;
	while(n != null) {
		if(table.contains(n.data)) {
			pre.next = n.next;
		} else {
			table[n.data] = true;
		}
		n = n.next;
	}
}

function deleteDups2(head) {
	if (head = null) return;
	var cur = head;
	while(cur != null) {
		var runner = cur;
		while(cur.next != null) {
			if(runner.next.data == cur.data) {
				runner.next = runner.next.next;
			} else {
				runner = runner.next;
			}
		}
		cur = cur.next;
	}
}