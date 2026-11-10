class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i=0;i<nums.length;i++){
            if (map.has(target - nums[i])){
                // we found it
                return [i,map.get(target - nums[i])]
            }
            else { 
                map.set(nums[i], i) //storing
            }
        }

    }
}

// target = i + j
// j = target - i