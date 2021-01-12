/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    l1 = reverseList(l1);
    l2 = reverseList(l2);

    let head = null;
    let carry = 0;
    while (l1 != undefined || l2 != undefined) {
        let x1 = l1 != undefined ? l1.val : 0;
        let x2 = l2 != undefined ? l2.val : 0;
        sum = (carry + x1 + x2)
        let value = sum % 10;
        carry = Math.floor(sum / 10);


        let curr = new ListNode(value);
        curr.next = head;
        head = curr;

        l1 = l1 != undefined ? l1.next : null;
        l2 = l2 != undefined ? l2.next : null;
    }

    if (carry != 0) {
        let curr2 = new ListNode(carry)
        curr2.next = head;
        head = curr2;
    }
    return head;
};

const reverseList = function (head) {
    let last = null;
    while (head != null) {
        let temp = head.next;
        head.next = last;
        last = head;
        head = temp;
    }
    return last;
}