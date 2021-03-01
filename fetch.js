const fetch = require("node-fetch");

function getByFetch() {
  const data = fetch("http://example.com/");
  return data;
}

module.exports = getByFetch;
