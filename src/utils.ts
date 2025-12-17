/**
 * Adds two numbers
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts b from a
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides a by b
 * @throws {Error} if b is 0
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Checks if a number is prime
 */
export function isPrime(num: number): boolean {
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
export function fibonacci(n: number): number {
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
