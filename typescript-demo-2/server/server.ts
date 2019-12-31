import * as express from "express";
import * as _ from "lodash";
import * as path from "path";
import { Question } from "../@types/Question";

const questions: Question[] = [
  {
    title: "How to log in?",
    content: "How do I log in?",
    answerCount: 2
  }
];

const port: string | number = process.env.port || 8000;

const app = express();

app.listen(port);
app.use(express.static("public"));

console.log("Listening op port " + port);

app.get("/questions", (_req, res) => {
  res.json(questions);
});

app.get("/main.js", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
