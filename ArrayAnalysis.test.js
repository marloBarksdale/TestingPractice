import { analyzeArray } from "./ArrayAnalysis";

test("Analyze Array", () => {
  const array = [1, 8, 3, 4, 2, 6];

  expect(analyzeArray(array)).toEqual({
    average: 4,
    length: 6,
    min: 1,
    max: 8,
  });
});
