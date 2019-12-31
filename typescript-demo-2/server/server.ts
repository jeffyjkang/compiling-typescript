import * as express from "express";

const port: string | number = process.env.port || 8000;

const app = express();

app.listen(port);
app.use(express.static("public"));

console.log("Listening op port " + port);
