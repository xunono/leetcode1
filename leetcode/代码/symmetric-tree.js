var isSymmetric = function(root) {
    const same = (a, b) => {
        if (!a || !b) return a === b;
        return a.val === b.val && same(a.left, b.right) && same(a.right, b.left);
    };
    return same(root, root);
};
