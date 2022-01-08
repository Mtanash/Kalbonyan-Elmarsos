import Hangman from "./hangman";
import getPuzzle from "./requests";

let game;

const generatePuzzleDOM = (puzzleText) => {
  const puzzle = document.createElement("span");
  puzzle.textContent = puzzleText;
  return puzzle;
};

const generateRemainingGuessesDOM = (text) => {
  const remainingGuessesElement = document.createElement("p");
  remainingGuessesElement.textContent = text;
  return remainingGuessesElement;
};

const renderPuzzle = (puzzle) => {
  const puzzleContainer = document.querySelector("#puzzle-container");
  const puzzleElement = document.createElement("div");
  puzzleElement.classList.add("puzzle");

  puzzle.puzzle.split("").forEach((letter) => {
    puzzleElement.appendChild(generatePuzzleDOM(letter));
  });

  const remainingGuessesElement = generateRemainingGuessesDOM(
    puzzle.statusMessage
  );

  puzzleContainer.innerHTML = "";

  puzzleContainer.appendChild(puzzleElement);
  puzzleContainer.appendChild(remainingGuessesElement);
};

window.addEventListener("keypress", (e) => {
  game.makeGuess(e.key);
  renderPuzzle(game);
});

const startGame = async () => {
  const puzzle = await getPuzzle(3);
  game = new Hangman(puzzle, 4);
  renderPuzzle(game);
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
