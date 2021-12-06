import KeyListener from '../KeyListener.js';
import Level from './Level.js';
import Scene from './Scene.js';
export default class Start extends Scene {
    keyListener;
    finished;
    constructor(game) {
        super(game);
        this.keyListener = new KeyListener();
        this.finished = false;
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_ENTER)) {
            this.finished = true;
            this.game.user.resetScore();
        }
    }
    update() {
        this.render();
        if (this.finished)
            return new Level(this.game);
        return null;
    }
    render() {
        const ctx = this.game.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.writeTextToCanvas('SHEEESH GAMING', this.game.canvas.width / 2, 100, 50, 'white');
        this.writeTextToCanvas('Press Enter to play', this.game.canvas.width / 2, 150, 20, 'white');
    }
}
//# sourceMappingURL=Start.js.map