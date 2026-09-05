class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;

        let prefix = new Array(n);
        prefix[0] = nums[0]

        for(let i=1; i<n;i++){
            prefix[i]=nums[i]*prefix[i-1];
        }
        console.log(prefix)

        
        let postfix = new Array(n);
        postfix[n-1] = nums[n-1]

        for(let i=n-2;i >= 0;i--){
            postfix[i]=nums[i]*postfix[i+1]
        }
        console.log(postfix)

        const result = new Array(n);
        result[0] = postfix[1];
        result[n-1] = prefix[n-2];

        for(let i=1; i<n-1;i++){
            result[i]=prefix[i-1]*postfix[i+1]
        }
        return result;
    }
}
