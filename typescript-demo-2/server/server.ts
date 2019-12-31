import * as express from "express";
//import * as _ from "lodash";
import * as path from "path";
import { Question } from "../@types/Question";

// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
const questions: Question[] = [
  {
    title: "How to log in?",
    content: "How do I log in?",
    answerCount: 2
  },
  {
    title: "Where is the lunch room?",
    content: "I can't find it",
    answerCount: 1
  },
  {
    title: "How to debug Typescript?",
    content: "Is VSCode the best tool?",
    answerCount: 3
  }
];

// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
const port: string | number = process.env.port || 8000;

const app = express();

app.listen(port);
app.use(express.static("public"));

console.log("Listening op port " + port);

app.get("/questions", (_req, res) => {
  debugger;
  res.json(questions);
});

app.get("/main.js", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});

app.get("/new", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  const question: Question = req.query;
  questions.push(question);
  res.json({
    questions,
    status: "OK"
  });
});
