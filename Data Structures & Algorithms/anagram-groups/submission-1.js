class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {

            const str = strs[i].split('').sort().join('');

            if (map.has(str)){
                const newArray = [...(map.get(str)), strs[i]]
                map.set(str, newArray)
            }
            else {
                map.set(str,[strs[i]])
            }    
        }

        const output = []
        map.forEach((value) => {
            output.push(value);
        });

        return output;

    }
}
