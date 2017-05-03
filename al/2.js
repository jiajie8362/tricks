/**
 * Created by jiajie on 17/5/3.
 * Total Accepted: 280353
 Total Submissions: 1029932
 Difficulty: Medium
 Contributor: LeetCode
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
	var newHead = new ListNode(0);
	var current = newHead;
	var carry = 0;

	while(l1 || l2) {
		var curVal = carry;
		if(l1) {
			curVal += l1.val;
		}
		if(l2) {
			curVal += l2.val;
		}
		carry = curVal >= 10 ? 1: 0;
		curVal = curVal % 10;
		var newNode = new ListNode(curVal % 10);
		current.next = newNode;
		current = current.next;
		if(l1)
			l1 = l1.next;
		if(l2)
			l2 = l2.next;
	}
	if (carry > 0) {
		current.next = new ListNode(1);
	}
	return newHead.next;
};

var a = new ListNode(2);
a.next = new ListNode(4);
a.next.next = new ListNode(3);
var b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(4);
var c = addTwoNumbers(a, b);
console.log(c.val);
console.log(c.next.val)