import Game from '../Game.js';
import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import Start from './Start.js';

export default class GameOver extends Scene {
  private keyListener: KeyListener;

  private finished: boolean;

  /**
   * l
   *
   * @param game l
   */
  public constructor(game: Game) {
    super(game);
    this.keyListener = new KeyListener();
    this.finished = false;
  }

  /**
   * l
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown(KeyListener.KEY_C)) {
      this.finished = true;
    }
  }

  /**
   * l
   *
   * @returns l
   */
  public update(): Scene {
    this.render();
    if (this.finished) return new Start(this.game);
    return null;
  }

  /**
   * b
   */
  public render(): void {
    const ctx = this.game.canvas.getContext('2d');
    // Clear the screen
    ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    this.writeTextToCanvas('Game Over', this.game.canvas.width / 2, 100, 50, 'red');
    this.writeTextToCanvas('Press C to continue', this.game.canvas.width / 2, 150, 20, 'white');
  }
}
