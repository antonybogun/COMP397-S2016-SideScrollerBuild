module managers {
    /**
     * Manages collision detection in the game
     *
     * @export
     * @class Collision
     */
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        /**
         * Check either two objects is colliding
         *
         * @param object1
         * @param object2
         */
        public check(object1:objects.GameObject, object2:objects.GameObject) {
            if (objects.Vector2.distance(object1.position, object2.position)
                <= (object1.halfHeight + object2.halfHeight)) {
                // if asteroid collides with another one
                if (object1.name === "asteroid" && object2.name === "asteroid") {
                    let tempDx = (<objects.Asteroid> object1).dx;
                    let tempDy = (<objects.Asteroid> object1).dy;
                    (<objects.Asteroid> object1).dx = (<objects.Asteroid> object2).dx;
                    (<objects.Asteroid> object1).dy = (<objects.Asteroid> object2).dy;
                    (<objects.Asteroid> object2).dx = tempDx;
                    (<objects.Asteroid> object2).dy = tempDy;
                    object1.update();
                    object2.update();
                    if (objects.Vector2.distance(object1.position, object2.position)
                        < (object1.halfHeight + object2.halfHeight)) {
                        if (object1.x > object2.x) object1.x += (object2.width - (object1.x - object2.x) + 1);
                        else object2.x += (object1.width - (object2.x - object1.x) + 1);
                    }
                    // if first object is player
                } else if (object1.name === "sheep") {
                    if (!object2.isColliding) {
                        object2.isColliding = true;

                        // if plane collides with cloud
                        if (object2.name === "asteroid") {
                            core.currentLives -= 1;
                            createjs.Sound.play("explosion");
                        }

                        // if plane collides with island
                        if (object2.name === "island") {
                            core.score += 100;
                            createjs.Sound.play("baaaa");
                        }
                    }
                }
            } else {
                object1.isColliding = false;
                object2.isColliding = false;
            }
        }
    }
}