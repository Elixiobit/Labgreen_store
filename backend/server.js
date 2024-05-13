#!/usr/bin/env node
// "use strict";

import "dotenv/config"; // вместо import * as dotenv from "dotenv";dotenv/config();
import express from "express";
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// import router  from "./routers/index.js";
import { log } from "node:console";

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "127.0.0.1";

const app = express();

const __filename = import.meta.filename; //абсалютный путь к текущей файлу
const __dirname = import.meta.dirname; // абсалютный путь к родительской папке текущего файла.

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/', express.static(path.join(__dirname, '../frontend')));

// console.dir(path);


// 
// app.use("/css", express.static(pathToFileURL("node_modules/bootstrap/dist/css", import.meta.url).pathname));
// app.use("/js", express.static(pathToFileURL("node_modules/bootstrap/dist/js", import.meta.url).pathname));
// app.use("/customer/css", express.static(pathToFileURL("public/css", import.meta.url).pathname));
// app.use(express.static(pathToFileURL("public", import.meta.url).pathname));

// app.use("/api", router);

app.get('/Hi', (req, res) => {
  res.send('hello world')
})


app.get("*", (req, res) => {
  res.status(404).send("<h1>EMPTY</h1>");

})



app.listen(PORT, HOST, () => {
  console.log(`Server started ${HOST}:${PORT}`);
})

