class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []; // storing only opening brackets
        const closeToOpen = { // hashmapping of pairs
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let bracket of s){ //for every bracket in list

            if (closeToOpen[bracket]) { //if this is a closing bracket
                // if there is an opening pair to compare to, check if it the correct pair
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[bracket]){
                    stack.pop() //remove the newly paired bracket
                } else { // if its not the right pair, the whole string is wrong so hard stop
                    return false
                }
            } else { // this is a opening bracket store in stack
                stack.push(bracket)
            }
        }

        return stack.length === 0; //if the stack is not empty, the string is invalid
    }
}
