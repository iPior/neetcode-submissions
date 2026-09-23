class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /**
         * so really here we are looking for the max of this array using binary search. Once we
         * find it, we return the element directly to the right.
         */
        
        let left = 0;
        let right = nums.length - 1

        // the key here is to find the rotation point
        while (left < right){
            let mid = Math.floor((left+right)/2)
            
            if (nums[mid]>nums[right]){ // the minimum is to the right
                left = mid+1
            }
            else { // the minimum is to the left
                right=mid
            }   
        }
        return nums[left]
    }
}
