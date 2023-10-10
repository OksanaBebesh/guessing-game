class GuessingGame {
  constructor() {
    this.arrayOfNumbers = [];
  }

  setRange(min, max) {
    this.arrayOfNumbers = Array.from(
      { length: max - min + 1 },
      (_, i) => min + i
    );
    this.min = min;
    this.max = max;
    return this.arrayOfNumbers;
  }

  guess() {
    this.resultGuess = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
    return this.resultGuess;
  }

  lower() {
    let middle = Math.round((this.max - this.min) / 2) + this.min;
    this.max = middle + 1;
  }

  greater() {
    let middle = Math.round((this.max - this.min) / 2) + this.min;
    this.min = middle - 1;
  }
}

module.exports = GuessingGame;
