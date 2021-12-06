import PowerUp from './PowerUp.js';
export default class Speed extends PowerUp {
    speedMultiplier;
    constructor(maxX, maxY) {
        super('./assets/img/speedup.png', maxX, maxY);
        this.speedMultiplier = 1.25;
    }
    applyTo(player) {
        player.setXVelocity(player.getXVelocity() * this.speedMultiplier);
        player.setYVelocity(player.getYVelocity() * this.speedMultiplier);
        setTimeout(() => {
            player.setXVelocity(player.getXVelocity() / this.speedMultiplier);
            player.setYVelocity(player.getYVelocity() / this.speedMultiplier);
        }, 5000);
    }
}
//# sourceMappingURL=Speed.js.map