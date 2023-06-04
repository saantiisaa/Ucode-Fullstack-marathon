class LinkedList {
    constructor() {
        this.head = null;
        this.nextElem = null;
    }

    add(value) {
        const newElem = { data: value, next: null };
        if (!this.head) {
            this.head = newElem;
            this.nextElem = newElem;
        } else {
            this.nextElem.next = newElem;
            this.nextElem = newElem;
        }
    }

    remove(value) {
        let currentElem = this.head;
        let prevElem = null;
        while (currentElem) {
            if (currentElem.data === value) {
                if (currentElem === this.head) {
                    this.head = currentElem.next;
                } else if (currentElem === this.nextElem) {
                    this.nextElem = prevElem;
                    this.nextElem.next = null;
                } else {
                    prevElem.next = currentElem.next;
                }
                return true;
            }
            prevElem = currentElem;
            currentElem = currentElem.next;
        }
        return false;
    }

    contains(value) {
        let currentElem = this.head;
        while (currentElem) {
            if (currentElem.data === value) {
                return true;
            }
            currentElem = currentElem.next;
        }
        return false;
    }

    *[Symbol.iterator]() {
        let currentElem = this.head;
        while (currentElem) {
            yield currentElem.data;
            currentElem = currentElem.next;
        }
    }

    clear() {
        this.head = null;
        this.nextElem = null;
    }

    count() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    log() {
        let values = [];
        let currentElem = this.head;
        while (currentElem) {
            values.push(currentElem.data);
            currentElem = currentElem.next;
        }
        console.log(values.join(', '));
    }
}

function createLinkedList(arr) {
    const linkedList = new LinkedList();
    for (const value of arr) {
        linkedList.add(value);
    }
    return linkedList;
}

// const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
// ll.log();
// // "100, 1, 2, 3, 100, 4, 5, 100"
// while(ll.remove(100));
// ll.log();
// // "1, 2, 3, 4, 5"
// ll.add(10);
// ll.log();
// // "1, 2, 3, 4, 5, 10"
// console.log(ll.contains(10));
// // "true"
// let sum = 0;
// for(const n of ll) {
//     sum += n;
// }
// console.log(sum);
// // "25"
// ll.clear();
// ll.log();
// // ""