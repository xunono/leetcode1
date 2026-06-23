var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    if (valueDiff < 0) return false;
    const width = valueDiff + 1;
    const buckets = new Map();
    const getId = (x) => Math.floor(x / width);
    for (let i = 0; i < nums.length; i++) {
        const id = getId(nums[i]);
        if (buckets.has(id)) return true;
        if (buckets.has(id - 1) && Math.abs(nums[i] - buckets.get(id - 1)) <= valueDiff) return true;
        if (buckets.has(id + 1) && Math.abs(nums[i] - buckets.get(id + 1)) <= valueDiff) return true;
        buckets.set(id, nums[i]);
        if (i >= indexDiff) buckets.delete(getId(nums[i - indexDiff]));
    }
    return false;
};
