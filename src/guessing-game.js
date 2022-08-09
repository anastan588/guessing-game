class GuessingGame {
  constructor() {
    this.max;
    this.min;
    this.guessNumber;
  }

  setRange(min, max) {
    this.max = max;
    this.min = min;
  }

  guess() {
    this.guessNumber = Math.round((this.max - this.min) / 2) + this.min;
    return this.guessNumber;
  }

  lower() {
    this.max = this.guessNumber;
  }

  greater() {
    this.min = this.guessNumber;
  }
}

module.exports = GuessingGame;
