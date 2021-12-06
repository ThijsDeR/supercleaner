import ScoringObject from './ScoringObject.js';

export default class Garbage extends ScoringObject {
  /**
   * l
   *
   * @param maxX l
   * @param maxY l
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/icecream.png', maxX, maxY, 10);
  }
}
