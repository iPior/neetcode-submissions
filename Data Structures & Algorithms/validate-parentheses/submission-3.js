class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const hash = {
            "(":")", 
            "[":"]",
            "{":"}",
        }
        const opening = new Set(["(", "[", "{"])


        for (const char of s) {
            if (opening.has(char)){
                stack.push(char)
            }
            else {
                let lastBracket = stack[stack.length-1]
                if (hash[lastBracket] == char){
                    stack.pop()
                }
                else return false;
            }
        }   

        return (stack.length == 0)
    }
}
