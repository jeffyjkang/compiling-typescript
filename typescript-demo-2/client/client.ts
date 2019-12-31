import { Question } from "../@types/Question";
// eslint-disable-next-line @typescript-eslint/type-annotation-spacing
((): void => {
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  let questions: Question[] = [];

  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  function render(): void {
    document.getElementById("Questions").innerHTML = questions
      .map(
        ({ title, content }) => `
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">
          ${title}
        </h6>
        <small class="text-muted">
          ${content}
        </small>
      </div>
    </li>
    `
      )
      .join("");
  }

  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  async function init(): Promise<void> {
    const request = await fetch("/questions");
    questions = await request.json();
    console.log(questions);
    // debugger;
    render();
  }

  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  async function handleSubmitQuestionForm(): Promise<void> {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
    const title: string = document.forms["QuestionForm"][0].value;
    // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
    const content: string = document.forms["QuestionForm"][1].value;

    const request = await fetch(`/new?title=${title}&content=${content}`);
    const json = await request.json();
    questions = json.questions;
    render();
  }

  document
    .getElementById("QuestionForm")
    .addEventListener("submit", handleSubmitQuestionForm);

  init();
})();
