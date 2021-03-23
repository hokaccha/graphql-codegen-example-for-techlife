import fs from "fs";
import express from "express";
import cors from "cors";
import { makeExecutableSchema } from "graphql-tools";
import { graphqlHTTP } from "express-graphql";
import { resolvers } from "./lib/resolvers";

const typeDefs = fs.readFileSync("../schema.graphql", { encoding: "utf8" });

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(8000, () => {
  console.log("listen: http://localhost:8000");
});
