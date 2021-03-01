const obj = require("./object");

// jest.mock("./object", () => {
//   return {
//     random: () => 1,
//     randomPlusOne: () => 2,
//   };
// });

// jest.mock("./object");
// obj.random.mockImplementation(() => 1);
// obj.randomPlusOne.mockImplementation(() => 2);

jest.spyOn(obj, 'random').mockImplementation(() => 1);
jest.spyOn(obj, 'randomPlusOne').mockImplementation(() => 2);

it("object", () => {
  expect(obj.random()).toBe(1);
  expect(obj.randomPlusOne()).toBe(2);
  expect(obj.foo()).toBe('foo')
});
