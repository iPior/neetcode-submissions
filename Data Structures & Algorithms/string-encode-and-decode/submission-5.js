class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = '' 
        for (const str of strs){
            encode+= str.length + '#' + str
        }
        return encode
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    const decode = []
    let i = 0;
       while (i < str.length){
            let j = i
            while (str[j] != '#'){
                j++
            }
            const length = parseInt(str.substring(i,j))
            const word = str.substring(j+1, j+1+length)
            decode.push(word)
            i=j+1+length;
        }
        return decode
    }
}
