module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space:objects.Space;
        private _island:objects.Island;
        private _player:objects.Player;
        private _asteroids:objects.Asteroid[];
        private _collision:managers.Collision;
        private _scoreLabel:objects.Label;
        private _livesLabel:objects.Label;
        private _themeSound:createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

        /**
         *
         */
        public Start():void {
            // ocean object
            this._space = new objects.Space("space");
            this.addChild(this._space);

            // island object
            this._island = new objects.Island("island");
            this.addChild(this._island);

            // player object
            this._player = new objects.Player("sheep");
            this.addChild(this._player);
            this._themeSound = createjs.Sound.play("main_theme");
            this._themeSound.loop = -1;

            // asteroid array
            this._asteroids = new Array<objects.Asteroid>();
            for (let i = 0; i < 3; i++) {
                this._asteroids.push(new objects.Asteroid("asteroid"));
                this.addChild(this._asteroids[i]);
            }

            // include a collision managers
            this._collision = new managers.Collision();

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "Consolas", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            this._space.update();
            this._island.update();
            this._player.update();
            this._collision.check(this._player, this._island);

            this._asteroids.forEach(asteroid => {
                asteroid.update();
                this._collision.check(this._player, asteroid);
                this._asteroids.forEach(anotherAsteroid => {
                    if (anotherAsteroid != asteroid &&
                        asteroid.isColliding === anotherAsteroid.isColliding) {
                        this._collision.check(asteroid, anotherAsteroid);
                    }
                })
            });

            this._updateScoreBoard();

            if (core.lives < 1) {
                createjs.Sound.stop();
                createjs.Sound.play("over");
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}