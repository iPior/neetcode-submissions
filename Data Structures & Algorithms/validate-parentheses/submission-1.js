class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let bracket of s){
            if (closeToOpen[bracket]) {
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[bracket]){
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(bracket)
            }
        }

        return stack.length === 0;
    }
}
