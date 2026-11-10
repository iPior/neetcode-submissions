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
                const lastBracket = stack.pop();

                if (hash[lastBracket] !== char) {
                    return false;
                }
            }
        }   

        return (stack.length == 0)
    }
}
