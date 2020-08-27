const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./lib/mongo"); //calls my mongoose connection to cleanup this file
app.use(express.json()); //allows me to receive JSON files from HEADER of REQUEST
app.use(cors()); //allows all requests from outside servers or apps
//=== setup my routes
app.use("/api/articles", require("./routes/article.routes"));
app.use("/api/author", require("./routes/author.routes"));

app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
