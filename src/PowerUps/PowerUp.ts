import Player from '../Player.js';
import ScoringObject from '../ScoringObjects/ScoringObject.js';

export default abstract class PowerUp extends ScoringObject {
  /**
   * l
   *
   * @param imageSrc l
   * @param maxX l
   * @param maxY l
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    super(imageSrc, maxX, maxY, 0);
  }

  /**
   * l
   *
   * @param player l
   */
  public abstract applyTo(player: Player): void;
}
