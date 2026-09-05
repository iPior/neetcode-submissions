class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        const result = new Array(n);
        result[0] = 1

        // first pass we are going through and storing the prefix product in i+1 of results
        for(let i=1;i<n;i++){
            result[i]=result[i-1]*nums[i-1]
        }

        let postfix = 1
        for(let i=n-1;i >= 0;i--){
            result[i]*=postfix;
            postfix*=nums[i]
        }
        

        return result;
    }
}
