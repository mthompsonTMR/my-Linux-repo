const NUM_CATEGORIES = 6; // Number of categories
const NUM_QUESTIONS_PER_CAT = 5; // Number of questions per category

let categories = []; // Main data structure for the app

/** Get NUM_CATEGORIES random category IDs from the API.
 *
 * Returns array of category objects with title and clues.
 */
async function getCategoryIds() {
  const apiUrl = "https://opentdb.com/api.php";
  const response = await axios.get(apiUrl, {
    params: {
      amount: NUM_CATEGORIES * NUM_QUESTIONS_PER_CAT,
      type: "multiple",
    },
  });

  const data = response.data.results;

  // Group questions into categories
  const categoryMap = {};
  data.forEach((item) => {
    if (!categoryMap[item.category]) {
      categoryMap[item.category] = [];
    }
    categoryMap[item.category].push({
      question: item.question,
      answer: item.correct_answer,
      showing: null,
    });
  });

  // Extract NUM_CATEGORIES random categories
  return Object.keys(categoryMap)
    .slice(0, NUM_CATEGORIES)
    .map((cat) => ({
      title: cat,
      clues: categoryMap[cat].slice(0, NUM_QUESTIONS_PER_CAT),
    }));
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initially, just show a "?" where the question/answer would go.)
 */
function fillTable() {
  const $board = $("#jeopardy-board");
  $board.empty();

  // Create table header
  const $thead = $("<thead>");
  const $headerRow = $("<tr>");
  categories.forEach((category) => {
    $("<th>")
      .text(category.title)
      .addClass("category-header") // Apply CSS class
      .appendTo($headerRow);
  });
  $thead.append($headerRow);
  $board.append($thead);

  // Create table body
  const $tbody = $("<tbody>");
  for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
    const $row = $("<tr>");
    categories.forEach((category) => {
      const clue = category.clues[i];
      const $cell = $("<td>")
        .text("?")
        .addClass("clue-cell") // Apply CSS class
        .data("clue", clue)
        .on("click", handleClick);
      $row.append($cell);
    });
    $tbody.append($row);
  }
  $board.append($tbody);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 */
function handleClick(evt) {
  const $cell = $(evt.target);
  const clue = $cell.data("clue");

  if (clue.showing === null) {
    $cell.html(clue.question); // Show the question
    clue.showing = "question";
  } else if (clue.showing === "question") {
    $cell.html(clue.answer); // Show the answer
    clue.showing = "answer";
    $cell.addClass("clue-clicked"); // Add CSS class for clicked state
  }
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */
function showLoadingView() {
  const $board = $("#jeopardy-board");
  $board.empty();
  const $loading = $("<div>").text("Loading...").attr("id", "loading");
  $("body").append($loading);
}

/** Remove the loading spinner and update the button used to fetch data. */
function hideLoadingView() {
  $("#loading").remove();
}

/** Start game:
 *
 * - Get random category IDs
 * - Get data for each category
 * - Create HTML table
 */
async function setupAndStart() {
  showLoadingView();
  categories = await getCategoryIds();
  hideLoadingView();
  fillTable();
}

/** On click of start/restart button, set up game. */
$("#restart-button").on("click", setupAndStart);

/** On page load, add event handler for clicking clues */
$(document).ready(() => {
  // Dynamically create game board and restart button if not in the HTML
  const $board = $("<table>").attr("id", "jeopardy-board");
  $("body").append($board);

  const $button = $("<button>")
    .attr("id", "restart-button")
    .text("Restart")
    .on("click", setupAndStart);
  $("body").append($button);

  // Start the game
  setupAndStart();
});
