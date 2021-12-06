import KeyListener from '../KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class LevelOver extends Scene {
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
            this.game.user.increaseLevel();
            this.game.user.resetScore();
        }
    }
    update() {
        this.render();
        console.log(this.finished);
        if (this.finished)
            return new Level(this.game);
        return null;
    }
    render() {
        const ctx = this.game.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.writeTextToCanvas('Level UP', this.game.canvas.width / 2, 100, 50, 'red');
        this.writeTextToCanvas('Press C to continue', this.game.canvas.width / 2, 150, 20, 'white');
    }
}
//# sourceMappingURL=LevelOver.js.map