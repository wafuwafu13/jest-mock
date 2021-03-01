const axios = require("axios");

function getByAxios() {
  const data = axios.get("http://example.com/");
  return data;
}

module.exports = getByAxios;
