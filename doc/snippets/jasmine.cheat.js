expect(x).toEqual(y); // compares objects or primitives x and y and passes if they are equivalent
// Every matcher's criteria can be inverted by prepending .not:
expect(x).not.toEqual(y); // compares objects or primitives x and y and passes if they are not equivalent

expect(x).toBe(expected); // compares the actual to the expected using ===
expect(x).toNotBe(expected); // toNotBe: compares the actual to the expected using !==

expect(x).toMatch(pattern); // compares x to string or regular expression pattern and passes if they match
expect(x).toNotMatch(pattern);

expect(x).toBeDefined(); // passes if x is not undefined
expect(x).toBeUndefined();
expect(x).toBeNull(); // passes if x is null

expect(x).toBeTruthy(); // passes if x evaluates to true
expect(x).toBeFalsy(); // passes if x evaluates to false

expect(x).toContain(y); // passes if array or string x contains y
expect(x).toNotContain(y);

expect(x).toBeCloseTo(expected, precision); // precision (default 2).

expect(x).toBeLessThan(expected);
expect(x).toBeGreaterThan(expected);

expect(x).toThrow(expected);
