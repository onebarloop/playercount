export class Player {
  name: string;
  score: number = 0;
  constructor(name: string) {
    this.name = name;
  }
  increaseScore() {
    this.score++;
  }
  decreaseScore() {
    this.score--;
  }
}
