const fetch = require("node-fetch");
const getByFetch = require("./fetch");

jest.mock("node-fetch");
fetch.mockImplementation(() => {
  return "foo";
});

it("fetch", () => {
  const data = getByFetch();
  expect(data).toBe("foo");
});
