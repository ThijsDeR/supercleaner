export default class UserData {
  private name: string;

  private score: number;

  private level: number;

  /**
   * l
   */
  public constructor() {
    this.score = 50;
    this.level = 0;
  }

  /**
   * l
   *
   * @returns l
   */
  public getName(): string {
    return this.name;
  }

  /**
   * l
   *
   * @param name l
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * l
   *
   * @returns l
   */
  public getScore(): number {
    return this.score;
  }

  /**
   * l
   *
   * @param points l
   */
  public addScore(points: number): void {
    this.score += points;
  }

  /**
   * l
   */
  public resetScore(): void {
    this.score = 50;
  }

  /**
   * l
   *
   * @returns l
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * l
   */
  public increaseLevel(): void {
    this.level += 1;
  }
}
