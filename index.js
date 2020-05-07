require('dotenv').config();
const server = require("./api/server.js");
const colors = require('colors');

// heroku will add the PORT variable to the environment
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`.rainbow.bold);
});

