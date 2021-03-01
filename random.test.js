const random = require("./random");

// random = jest.fn(() => 2)

// jest.mock('random')
// Cannot find module 'random' from 'index.test.js'

jest.mock('./random')
random.mockImplementation((a, b, c) => b);

it("random function", () => {
  expect(random(1, 2, 3)).toBe(2);
  expect(random(1, 3, 5)).toBe(3);
});
