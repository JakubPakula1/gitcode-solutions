function isValid(s) {
    const stack = [];
    const pairs = { ")": "(", "}": "{", "]": "[" };
    
    for (let char of s) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}