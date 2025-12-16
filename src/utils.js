// ----------------
// src/utils.js
// ----------------
/**
 * Adds two numbers
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a
 */
function subtract(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b
 * @throws {Error} if b is 0
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Checks if a number is prime
 */
function isPrime(num) {
  // Handle edge cases
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Check odd divisors up to sqrt(num)
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

/**
 * Calculates the nth Fibonacci number
 */
function fibonacci(n) {
  if (n < 0) return 0;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  isPrime,
  fibonacci,
};
