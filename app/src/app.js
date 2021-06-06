import express from "express";
import { promises as fs } from "fs";

const app = express();

app.get("/", async (request, response) => {
    response.status(200).send(await fs.readFile("./src/index.html", "utf8"));
});

app.get("/hello", async (request, response) => {
    response.status(200).send("hello");
});

export default app;
