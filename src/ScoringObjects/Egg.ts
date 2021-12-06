import ScoringObject from './ScoringObject.js';

export default class Egg extends ScoringObject {
  /**
   * l
   *
   * @param maxX l
   * @param maxY l
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/egg.png', maxX, maxY, -5);
  }
}
