import Game from './Game.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  /**
   * l
   *
   * @param imageSrc l
   * @param maxX l
   * @param maxY l
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = Game.randomNumber(0, maxX);
    this.yPos = Game.randomNumber(0, maxY);
  }

  /**
   * l
   *
   * @returns l
   */
  public getImageHeight(): number {
    return this.img.height;
  }

  /**
   * l
   *
   * @returns l
   */
  public getImageWidth(): number {
    return this.img.width;
  }

  /**
   * l
   *
   * @returns l
   */
  public getXpos(): number {
    return this.xPos;
  }

  /**
   * l
   *
   * @returns l
   */
  public getYpos(): number {
    return this.yPos;
  }

  /**
   * l
   *
   * @param ctx l
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.img,
      this.xPos,
      this.yPos,
    );
  }
}
