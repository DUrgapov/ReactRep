function sum(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] == k) {
                return true;
            }
        }
    }
    return false;
}
console.log(sum([10, 15, 3, 7], 17));
