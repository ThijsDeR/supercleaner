import KeyListener from '../KeyListener.js';
import Scene from './Scene.js';
import Start from './Start.js';
export default class GameOver extends Scene {
    keyListener;
    finished;
    constructor(game) {
        super(game);
        this.keyListener = new KeyListener();
        this.finished = false;
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_C)) {
            this.finished = true;
        }
    }
    update() {
        this.render();
        if (this.finished)
            return new Start(this.game);
        return null;
    }
    render() {
        const ctx = this.game.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.writeTextToCanvas('Game Over', this.game.canvas.width / 2, 100, 50, 'red');
        this.writeTextToCanvas('Press C to continue', this.game.canvas.width / 2, 150, 20, 'white');
    }
}
//# sourceMappingURL=GameOver.js.map