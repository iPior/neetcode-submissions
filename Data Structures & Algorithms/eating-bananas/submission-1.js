class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    // Search space: minimum possible speed is 1,
    // maximum needed speed is the largest pile.
    let left = 1;
    let right = Math.max(...piles);

    // Eating at the maximum pile size will always work,
    // so this is our initial valid answer.
    let res = right;

    while (left <= right) { // binary search over possible eating speeds
        let k = Math.floor((left + right) / 2);

        // Calculate how many hours Koko needs if she eats at speed k.
        let hours = 0;
        for (let p of piles) {
            hours += Math.ceil(p / k);
        }

        // If k works, save it and try a smaller eating speed.
        if (hours <= h) {
            res = Math.min(k, res);
            right = k - 1; // search the LEFT half for a smaller valid k
        } else {
            // k is too slow, so we need a larger eating speed.
            left = k + 1; // search the RIGHT half
        }
    }

    return res;
    }
}
