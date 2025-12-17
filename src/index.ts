import { add, subtract, multiply, divide, isPrime, fibonacci } from "./utils";

console.log("Add(5, 3):", add(5, 3));
console.log("Subtract(10, 4):", subtract(10, 4));
console.log("Multiply(6, 7):", multiply(6, 7));
console.log("Divide(20, 5):", divide(20, 5));

const num = 17;
console.log(`Is ${num} Prime?:`, isPrime(num));

const n = 10;
console.log(`Fibonacci(${n}):`, fibonacci(n));
