
const num1 = 2;
const num2 = 31;
const multiply = num1 * num2; // 62

const random = Math.floor(Math.random() * 100) + 1; // Random integer greater than 0

const num3 = 24;
const num4 = 5;
const mod = num3 % num4; // Should be 4

const max = Math.max(1, 5, 10, 15, 20); // Should return 20

// Exporting variables for testing purposes (optional if needed)
module.exports = { multiply, random, mod, max };
