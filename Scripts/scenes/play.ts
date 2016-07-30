module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space:objects.Space;
        private _planet:objects.Planet;
        private _player:objects.Player;
        private _chargedClouds:objects.ChargedCloud[];
        private _collision:managers.Collision;
        private _scoreLabel:objects.Label;
        private _liveIcons:createjs.Bitmap[];
        private _themeSound:createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            for (let i = core.startingLives - 1; i > core.currentLives - 1; i--) {
                this._liveIcons[i].visible = false;
            }
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
            this._planet = new objects.Planet("planet");
            this.addChild(this._planet);

            // player object
            this._player = new objects.Player("zombie");
            this.addChild(this._player);
            this._themeSound = createjs.Sound.play("main_theme");
            this._themeSound.loop = -1;

            // charged cloud array
            this._chargedClouds = new Array<objects.ChargedCloud>();
            for (let i = 0; i < 3; i++) {
                this._chargedClouds.push(new objects.ChargedCloud("chargedCloud"));
                this.addChild(this._chargedClouds[i]);
            }

            // include a collision managers
            this._collision = new managers.Collision();

            // lives array
            this._liveIcons = new Array<createjs.Bitmap>();
            for (let i = 0; i < core.startingLives; i++) {
                this._liveIcons.push(new createjs.Bitmap(core.assets.getResult("live")));
                this._liveIcons[i].x = 10 + i * this._liveIcons[0].getBounds().width;
                this._liveIcons[i].y = 5;
                this.addChild(this._liveIcons[i]);
            }

            // add core label
            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "Consolas", "#7200ff", 450, 5, false);
            this._scoreLabel.textAlign = "center";
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            this._space.update();
            this._planet.update();
            this._player.update();
            this._collision.check(this._player, this._planet);

            this._chargedClouds.forEach(asteroid => {
                asteroid.update();
                this._collision.check(this._player, asteroid);
                this._chargedClouds.forEach(anotherAsteroid => {
                    if (anotherAsteroid != asteroid &&
                        asteroid.isColliding === anotherAsteroid.isColliding) {
                        this._collision.check(asteroid, anotherAsteroid);
                    }
                })
            });

            this._updateScoreBoard();

            if (core.currentLives < 1) {
                createjs.Sound.stop();
                createjs.Sound.play("over");
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        }

        // EVENT HANDLERS ++++++++++++++++

    }
}