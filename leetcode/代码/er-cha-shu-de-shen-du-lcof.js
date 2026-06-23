var calculateDepth = function(root) {
    if (!root) return 0;
    return 1 + Math.max(calculateDepth(root.left), calculateDepth(root.right));
};
