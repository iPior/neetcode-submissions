class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let startIndex = 0
        let endIndex = numbers.length-1

        while (startIndex < endIndex) {
            const start = numbers[startIndex];
            const end = numbers[endIndex];

            if (start+end==target) return [startIndex+1,endIndex+1]
            else if (start+end>target){
                endIndex=endIndex-1;
            }
            else {
                startIndex=startIndex+1
            }
        }
        return [];
    }
}
