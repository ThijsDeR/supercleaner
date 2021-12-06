import Egg from './ScoringObjects/Egg.js';
import Game from './Game.js';
import Garbage from './ScoringObjects/Garbage.js';
import Player from './Player.js';
import Scene from './Scene.js';
import Speed from './PowerUps/Speed.js';
import PowerUp from './PowerUps/PowerUp.js';
export default class Level extends Scene {
    garbageItems;
    player;
    constructor(game) {
        super(game);
        this.garbageItems = [];
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
    }
    processInput() {
        if (this.player.isCleaning()) {
            console.log('cleaning');
            this.garbageItems = this.garbageItems.filter((element) => {
                if (this.player.collidesWith(element)) {
                    if (element instanceof PowerUp) {
                        const powerup = element;
                        powerup.applyTo(this.player);
                    }
                    this.game.user.addScore(element.getScore());
                    return false;
                }
                return true;
            });
        }
        this.player.move(this.game.canvas);
    }
    update(elapsed) {
        if (Game.randomNumber(1, Math.round(elapsed)) === 1) {
            this.garbageItems.push(new Garbage(this.game.canvas.width, this.game.canvas.height));
        }
        else if (Game.randomNumber(1, 200) === 1) {
            this.garbageItems.push(new Egg(this.game.canvas.width, this.game.canvas.height));
        }
        this.garbageItems.push(new Speed(this.game.canvas.width, this.game.canvas.height));
        return null;
    }
    render() {
        const ctx = this.game.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.garbageItems.forEach((element) => {
            element.draw(ctx);
        });
        this.player.draw(ctx);
        this.writeTextToCanvas(`Score: ${this.game.user.getScore()}`, 50, 50, 20, 'white');
    }
}
//# sourceMappingURL=Level.js.map