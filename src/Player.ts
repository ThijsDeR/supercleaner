import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';

export default class Player extends GameItem {
  private xVelocity: number;

  private yVelocity: number;

  private keyboard: KeyListener;

  /**
   * l
   *
   * @param maxX l
   * @param maxY l
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/character_robot_walk0.png', maxX, maxY);
    this.xVelocity = 2;
    this.yVelocity = 2;
    this.keyboard = new KeyListener();
  }

  /**
   * l
   *
   * @returns l
   */
  public isCleaning(): boolean {
    if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
      return true;
    }
    return false;
  }

  /**
   * l
   *
   * @param other l
   * @returns l
   */
  public collidesWith(other: GameItem): boolean {
    if (
      this.xPos < other.getXpos() + other.getImageWidth()
      && this.getXpos() + this.img.width > other.getXpos()
      && this.getYpos() < other.getYpos() + other.getImageHeight()
      && this.getYpos() + this.img.height > other.getYpos()
    ) {
      return true;
    }
    return false;
  }

  /**
   * l
   *
   * @param canvas l
   */
  public move(canvas: HTMLCanvasElement): void {
    // Moving right
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
      && this.xPos + this.img.width + this.xVelocity < canvas.width
    ) {
      this.xPos += this.xVelocity;
    }

    // Moving left
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
      && this.xPos - this.xVelocity > 0
    ) {
      this.xPos -= this.xVelocity;
    }

    // Moving up
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_UP)
      && this.yPos - this.yVelocity > 0
    ) {
      this.yPos -= this.yVelocity;
    }

    // Moving down
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
      && this.yPos + this.img.height + this.yVelocity < canvas.height
    ) {
      this.yPos += this.yVelocity;
    }
  }

  /**
   * l
   *
   * @returns l
   */
  public getXVelocity(): number {
    return this.xVelocity;
  }

  /**
   * l
   *
   * @param velocity l
   */
  public setXVelocity(velocity: number): void {
    this.xVelocity = velocity;
  }

  /**
   * l
   *
   * @returns l
   */
  public getYVelocity(): number {
    return this.yVelocity;
  }

  /**
   * l
   *
   * @param velocity l
   */
  public setYVelocity(velocity: number): void {
    this.yVelocity = velocity;
  }
}
