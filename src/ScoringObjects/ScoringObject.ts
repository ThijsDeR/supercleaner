import GameItem from '../GameItem.js';

export default abstract class ScoringObject extends GameItem {
  private score: number;

  /**
   * l
   *
   * @param imageSrc l
   * @param maxX l
   * @param maxY l
   * @param score l
   */
  public constructor(imageSrc: string, maxX: number, maxY: number, score: number) {
    super(imageSrc, maxX, maxY);
    this.score = score;
  }

  /**
   * l
   *
   * @returns l
   */
  public getScore(): number {
    return this.score;
  }
}
