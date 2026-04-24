class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const len = nums.length;
        // sort array numerically
        const sorted = nums.sort((a, b) => a - b)
        const answr = []

        // fix one number and two sum the leftover two numbers
        for (let i = 0; i < len-2; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            //extra: once fixed value >= 0 you can terminate
            if (sorted[i] > 0){
                break; 
            }
            
            let leftIdx = i+1;
            let rightIdx = len-1

            while (leftIdx < rightIdx){

                // we found it woo!
                if (sorted[i]+sorted[leftIdx]+sorted[rightIdx] == 0){
                    answr.push([sorted[i],sorted[leftIdx],sorted[rightIdx]]);
                    leftIdx++;
                    rightIdx--;

                    // skip duplicates for left
                    while (leftIdx < rightIdx && nums[leftIdx] === nums[leftIdx - 1]) leftIdx++;
                    // skip duplicates for right
                    while (leftIdx < rightIdx && nums[rightIdx] === nums[rightIdx + 1]) rightIdx--;
                }
                // if triplet > 0 move right pointer over
                else if (sorted[i]+sorted[leftIdx]+sorted[rightIdx] < 0){
                    leftIdx++;
                }
                // if triplet < 0 move left pointer over 
                else {
                    rightIdx--;
                }
            }
        }

        return answr;


    

    }
}
