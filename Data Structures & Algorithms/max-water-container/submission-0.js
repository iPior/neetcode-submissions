class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let area=0;

        while(left<right){
            let height = Math.min(heights[left],heights[right]);
            let width = right-left;

            area = Math.max(area,width*height);

            if(heights[left]>heights[right]){
                right--;
            }    
            else{
                left++
            } 

        }
        return area;
    }  
}
