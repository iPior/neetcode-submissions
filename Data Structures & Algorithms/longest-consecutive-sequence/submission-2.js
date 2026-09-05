class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        const map = new Map(); // all sequence starts

        // setting sequence starters
        for(let num of nums){
            if(!set.has(num - 1)){
                map.set(num, [num])
            }
        }

        let longestSeq=0
        for(let [key,value] of map){
            let nextNum = value[value.length-1]+1;
            if (set.has(nextNum)){
                value.push(nextNum);
                map.set(nextNum, value);
            }
            if(value.length > longestSeq) longestSeq=value.length;
        }

        return longestSeq;

    }
}
