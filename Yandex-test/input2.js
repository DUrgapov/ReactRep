/*function merge(nums1, n, nums2, m) {
    nums1.length = m - 1;
    nums2.forEach(function(item) {
        nums1.push(item);
    });
    function sIncrease(i, ii) {
        // По возрастанию
        if (i > ii) return 1;
        else if (i < ii) return -1;
        else return 0;
    }
    nums1.sort(sIncrease);
    return nums1;
}
console.log(merge([46, 55, 88, 0, 0, 0, 0], 3, [18, 29, 80, 90], 4));
*/
function merge(nums1, n, nums2, m) {
    for (var i = 0; i < m; i++) {
        nums1[n + m - i - 1] = nums2[i];
    }
    function sIncrease(i, ii) {
        // По возрастанию
        if (i > ii) return 1;
        else if (i < ii) return -1;
        else return 0;
    }
    nums1.sort(sIncrease);
    return nums1;
}
console.log(merge([46, 55, 88, 0, 0, 0, 0], 3, [18, 29, 80, 90], 4));
