function calculatesNumbers(var1, var2) {
    return var1 + var2
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false
    }
    return number > 1
}