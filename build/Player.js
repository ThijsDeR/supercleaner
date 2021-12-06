import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVelocity;
    yVelocity;
    keyboard;
    constructor(maxX, maxY) {
        super('./assets/img/character_robot_walk0.png', maxX, maxY);
        this.xVelocity = 2;
        this.yVelocity = 2;
        this.keyboard = new KeyListener();
    }
    isCleaning() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            return true;
        }
        return false;
    }
    collidesWith(other) {
        if (this.xPos < other.getXpos() + other.getImageWidth()
            && this.getXpos() + this.img.width > other.getXpos()
            && this.getYpos() < other.getYpos() + other.getImageHeight()
            && this.getYpos() + this.img.height > other.getYpos()) {
            return true;
        }
        return false;
    }
    move(canvas) {
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
            && this.xPos + this.img.width + this.xVelocity < canvas.width) {
            this.xPos += this.xVelocity;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
            && this.xPos - this.xVelocity > 0) {
            this.xPos -= this.xVelocity;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_UP)
            && this.yPos - this.yVelocity > 0) {
            this.yPos -= this.yVelocity;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
            && this.yPos + this.img.height + this.yVelocity < canvas.height) {
            this.yPos += this.yVelocity;
        }
    }
    getXVelocity() {
        return this.xVelocity;
    }
    setXVelocity(velocity) {
        this.xVelocity = velocity;
    }
    getYVelocity() {
        return this.yVelocity;
    }
    setYVelocity(velocity) {
        this.yVelocity = velocity;
    }
}
//# sourceMappingURL=Player.js.map