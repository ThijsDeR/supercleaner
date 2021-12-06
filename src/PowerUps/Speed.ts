import Player from '../Player.js';
import PowerUp from './PowerUp.js';

export default class Speed extends PowerUp {
  private speedMultiplier: number;

  /**
   * l
   *
   * @param maxX l
   * @param maxY l
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/speedup.png', maxX, maxY);
    this.speedMultiplier = 1.25;
  }

  /**
   * l
   *
   * @param player l
   */
  public applyTo(player: Player): void {
    player.setXVelocity(player.getXVelocity() * this.speedMultiplier);
    player.setYVelocity(player.getYVelocity() * this.speedMultiplier);

    setTimeout(() => {
      player.setXVelocity(player.getXVelocity() / this.speedMultiplier);
      player.setYVelocity(player.getYVelocity() / this.speedMultiplier);
    }, 5000);
  }
}
