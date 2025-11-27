function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Example usage
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(17));  // true
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate(operation, num1, num2) {
    switch (operation) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operation";
    }
}

// Example usage
console.log(calculate("+", 10, 5));   // 15
console.log(calculate("-", 10, 5));   // 5
console.log(calculate("*", 10, 5));   // 50
console.log(calculate("/", 10, 5));   // 2
