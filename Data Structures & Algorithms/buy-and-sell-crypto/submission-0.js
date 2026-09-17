class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /** 
         * so the goal here is to iterate using two pointers. Left will be buy and right
         * will be sell. 
         * If L > R. We iterate L once over
         * Else we keep pointer L stuck and move the R pointer over | happening no matter what
         * calculating max profit
         * If R is less than L, we adjust L to be R because we found a new low??
         * 
         */
        let left = prices[0];
        let right;
        let maxProfit = 0;

        for (let i=0;i<prices.length-1;i++){
            let right = prices[i+1];
            if(left > right) left=right;
            else {
                let profit = (right - left)
                if (profit > maxProfit) maxProfit = profit;
                
            }   
        }
        return maxProfit;

    }
}
