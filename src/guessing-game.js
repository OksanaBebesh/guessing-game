class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.resultGuess = Math.round((this.max + this.min) / 2);

    return this.resultGuess;
  }

  lower() {
    this.max = this.resultGuess;
  }

  greater() {
    this.min = this.resultGuess;
  }
}

module.exports = GuessingGame;
