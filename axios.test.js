const axios = require("axios");
const getByAxios = require("./axios");

//  ReferenceError: /Users/tagawahirotaka/Desktop/jest-mock/axios.test.js: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
// jest.mock("axios", () => {
//     return {
//         get: axios.mockImplementation(() => "foo")
//     }
// });

// jest.mock("axios", () => {
//   return {
//     get: () => "foo",
//   };
// });

// jest.mock("axios");
// axios.get.mockImplementation(() => "foo");

jest.spyOn(axios, 'get').mockImplementation(() => 'foo');

it("axios", () => {
  const data = getByAxios();
  expect(data).toBe("foo");
});
