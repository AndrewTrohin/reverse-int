module.exports = function reverse (n) {
    return +String(Math.abs(n))
            .split('')
            .reduce((acc, digit) => digit + acc, '');  
}
