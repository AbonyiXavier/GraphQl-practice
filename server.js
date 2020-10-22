const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema")


const app = express()
// Entry point for GrapQl
app.use("/graphql", graphqlHTTP({
    schema:schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("server is running on port 4000...");
})