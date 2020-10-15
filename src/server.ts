import path from "path";
import express from "express";
import "./database/connection";
import "express-async-errors";

import cors from "cors";

import erroHandler from "./errors/handler";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(erroHandler);

app.listen(3333);
