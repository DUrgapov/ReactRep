function sum(nums, k) {
    function sIncrease(i, ii) {
        // По возрастанию
        if (i > ii) return 1;
        else if (i < ii) return -1;
        else return 0;
    }
    nums.sort(sIncrease);
    console.log(nums);

    sum = nums[0] + nums[nums.length - 1];
    if (sum == k) {
        return true;
    }
    let i = 0;
    let j = nums.length - 1;
    while (1) {
        if (i > j || i == j) {
            return false;
        }
        if (nums[i] + nums[j] > k) {
            j--;
        } else if (nums[i] + nums[j] < k) {
            i++;
        } else if (nums[i] + nums[j] == k) {
            return true;
        }
    }
}
console.log(sum([10, 15, 3, 8], 17));

/*
        for (let i = 1; i < nums.length/2; i++) {
        if (sum > k) {
            sum = nums[0] + nums[nums.length-1-i]
        } 
         else if (sum < k) {
             sum = nums[]
        }
        else if(sum == k)
        {
            
        }
    }*/
