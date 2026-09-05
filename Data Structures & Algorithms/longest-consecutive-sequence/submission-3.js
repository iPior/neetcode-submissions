class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longestSeq=0

        for(let num of nums){
            if(!set.has(num - 1)){
                let length = 1
                while (set.has(num+length)){
                    length++
                }
                longestSeq = Math.max(longestSeq, length)
            }
        }

        return longestSeq;

    }
}
