module scenes {
    export class Over extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            // Add Menu Label
            this._gameOverLabel = new objects.Label(
                "GAME OVER", "60px","Consolas", "#000000",
                320, 240
                );
            this.addChild(this._gameOverLabel);

            // add the start button
            this._restartButton = new objects.Button(
                "restartButton", 320, 420, true
            )
            this.addChild(this._restartButton);

            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _restartButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
    }
}