const express = require("express");
const mongoose = require("mongoose");
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");

//TODO: Move this to a secret env
const URI = "mongodb://root:root1234@ds113003.mlab.com:13003/ninja-graphql";

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log("Server running ..."));
