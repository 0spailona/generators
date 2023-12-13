function canIterate(a) {
    try {
        a[Symbol.iterator]();
        return true;

    } catch (e) {
        return false
    }
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate("Netology")); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
