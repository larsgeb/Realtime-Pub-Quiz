//SERVER URL + PORT
const URL = process.env.API_URL || "http://localhost";
const PORT = 3001;

console.log(URL);
console.log(PORT);

module.exports = { URL, PORT };
