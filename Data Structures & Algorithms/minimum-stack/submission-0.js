class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length===0) return;
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const temp = [...this.stack];
        let min = temp[temp.length-1];

        while(temp.length !== 0){
            let top = temp[temp.length-1];
            if(top < min) min=top;
            temp.pop()
        }
        return min
    }
}
