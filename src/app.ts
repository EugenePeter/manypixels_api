import express from "express";
import dotenv from "dotenv";
import expressPlayground from "graphql-playground-middleware-express";
import { initializeApolloServer } from "./domains";

dotenv.config();

const app = express();
app.get("/", expressPlayground({ endpoint: "/graphql" }));

app.listen(process.env.PORT, () => {
    console.log(`appsss is running on PORT: ${process.env.PORT}`);
    initializeApolloServer(app);
});
