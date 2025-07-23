class ListNode<T>{
    next?: ListNode<T>;

    constructor(public value:T){
        this.value = value;
    }
}

class LinkedList<T>{
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0 ;

    add(value: T){
        const node = new ListNode(value);
        if(!this.root || !this.tail){
            this.root = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    getNumberOfElements(){
        return this.length;
    }
    print(){
        let current = this.root;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

}
let listnumber = new LinkedList<number>();
listnumber.add(10)
listnumber.add(10)
listnumber.add(10)
listnumber.add(10)
listnumber.print()