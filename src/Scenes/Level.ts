import Egg from '../ScoringObjects/Egg.js';
import Game from '../Game.js';
import Garbage from '../ScoringObjects/Garbage.js';
import Player from '../Player.js';
import Scene from './Scene.js';
import ScoringObject from '../ScoringObjects/ScoringObject.js';
import Speed from '../PowerUps/Speed.js';
import PowerUp from '../PowerUps/PowerUp.js';
import LevelOver from './LevelOver.js';
import GameOver from './GameOver.js';

export default class Level extends Scene {
  private garbageItems: ScoringObject[];

  private player: Player;

  /**
   * l
   *
   * @param game l
   */
  public constructor(game: Game) {
    super(game);
    this.garbageItems = [];
    this.player = new Player(this.game.canvas.width, this.game.canvas.height);
  }

  /**
   * l
   */
  public processInput(): void {
    if (this.player.isCleaning()) {
      console.log('cleaning');
      // create a new array with garbage item that are still on the screen
      // (filter the clicked garbage item out of the array garbage items)
      this.garbageItems = this.garbageItems.filter((element) => {
        // check if the player is over (collided with) the garbage item.
        if (this.player.collidesWith(element)) {
          // Do not include this item.
          if (element instanceof PowerUp) {
            const powerup = element as PowerUp;
            powerup.applyTo(this.player);
          }
          this.game.user.addScore(element.getScore());
          return false;
        }
        return true;
      });
    }
    this.player.move(this.game.canvas);
  }

  /**
   * l
   *
   * @returns l
   */
  public update(): Scene {
    if (Game.randomNumber(1, 10) === 1) {
      this.game.user.addScore(-1);
    }
    if (Game.randomNumber(1, 20) === 1) {
      this.garbageItems.push(new Garbage(this.game.canvas.width, this.game.canvas.height));
    } else if (Game.randomNumber(1, 200) === 1) {
      this.garbageItems.push(new Egg(this.game.canvas.width, this.game.canvas.height));
    }

    if (Game.randomNumber(1, 1000) === 1) {
      this.garbageItems.push(new Speed(this.game.canvas.width, this.game.canvas.height));
    }

    if (this.game.user.getScore() > 500) return new LevelOver(this.game);
    if (this.game.user.getScore() < 0) return new GameOver(this.game);

    return null;
  }

  /**
   * b
   */
  public render(): void {
    const ctx = this.game.canvas.getContext('2d');
    // Clear the screen
    ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

    this.garbageItems.forEach((element) => {
      element.draw(ctx);
    });
    this.player.draw(ctx);

    this.writeTextToCanvas(`Score: ${this.game.user.getScore()}`, 50, 50, 20, 'white');
  }
}
