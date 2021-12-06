import GameLoop from './GameLoop.js';
import Start from './Scenes/Start.js';
import UserData from './UserData.js';
export default class Game {
    canvas;
    user;
    gameLoop;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.user = new UserData();
        this.user.setName('lolnoober');
        this.gameLoop = new GameLoop();
        this.gameLoop.start(new Start(this));
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map