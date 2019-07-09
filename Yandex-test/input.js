function merge(nums1, n, nums2, m) {
    for (let i = 0; i < m; i++) {
        var count = 1;
        for (let j = 0; j < m + n; j++) {
            if (nums2[i] <= nums1[j]) {
                count = 0;
            }
            if (count == 1) {
                nums[2];
            }
        }
    }
    return nums1;
}
console.log(merge([46, 55, 88, 0, 0, 0, 0], 3, [18, 29, 80, 90], 4));
