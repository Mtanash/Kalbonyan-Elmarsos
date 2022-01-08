class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.guessedLetters = [];
    this.remainingGuesses = remainingGuesses;
    this.status = "playing";
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left : ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}".`;
    } else if (this.status === "finished") {
      return `Greate work! You guessed the word.`;
    }
  }
  get puzzle() {
    let result = "";
    this.word.forEach((letter) => {
      if (letter === " ") {
        result += " ";
      } else if (this.guessedLetters.includes(letter)) {
        result += letter;
      } else {
        result += "*";
      }
    });
    return result;
  }
  makeGuess(character) {
    if (this.status !== "playing") return;
    if (
      !this.guessedLetters.includes(character.toLowerCase()) &&
      typeof character === "string" &&
      character.length === 1
    ) {
      this.guessedLetters = [...this.guessedLetters, character];
      if (!this.word.includes(character.toLowerCase()))
        this.remainingGuesses -= 1;
    }
    this.checkStatus();
  }
  checkStatus() {
    if (!this.puzzle.includes("*") && this.remainingGuesses !== 0) {
      this.status = "finished";
    } else if (this.remainingGuesses <= 0) {
      this.status = "failed";
    } else {
      this.status = "playing";
    }
  }
}

export default Hangman;
