import { capitalize } from "./capitalize";
import { reverse } from "./reverseString";
import { sum, division, multiplication, subtract } from "./calculator";

test("Addition", () => {
  expect(sum(3, 1)).toBe(4);
  for (let a = 0; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(sum(a, b)).not.toBe(0);
    }
  }
});

test("Subtraction", () => {
  expect(subtract(3, 1)).toBe(2);
  expect(subtract(1, 3)).toBe(-2);

  for (let a = 0; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(subtract(a, b)).not.toBeGreaterThan(a || b);
    }
  }
});

test("Multiplication", () => {
  expect(multiplication(5, 2)).toBe(10);
  expect(multiplication(6, 3)).toBe(18);
  expect(multiplication(5, 0)).toBe(0);
  expect(multiplication(-5, -6)).toBe(30);
});

test("Division", () => {

    expect(division(5,2)).toBeCloseTo(2.5);
    expect(division(10,2)).toBe(5);
    expect(division(2,10)).toBeCloseTo(0.2);



});

test("reverse String", () => {
  expect(reverse("Hello")).toMatch("olleH");
});

test("capitalize strings", () => {
  expect(capitalize("Hello")).toMatch("Hello");
  expect(capitalize("flood")).toMatch("Flood");
  expect(capitalize("caR")).toMatch("CaR");
});

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
