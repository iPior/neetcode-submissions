class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0 //cheapest day we've encountered
        let right = 1 // sell day, which we only move
        let ans = 0

        while(right < prices.length){
            if (prices[right] < prices[left]){
                left = right
            } else {
                let price = prices[right]-prices[left]
                if (price > ans){
                    ans = price
                }
            }
            right++
        }
        return ans;
    }
}
