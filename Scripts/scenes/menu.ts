/**
 * @author Anton Bogun
 * @author Liavontsi Brechka
 * @studentID 300863440
 * @studentID 300800345
 * @date July 29, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the side scroller
 */

module scenes {
    export class Menu extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space:objects.Space;
        private _menuLabel:objects.Label;
        private _startButton:objects.Button;
        private _instructionsButton:objects.Button;

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
            this._space = new objects.Space("space");
            this.addChild(this._space);

            // Add Menu Label
            this._menuLabel = new objects.Label(
                "FLYING DEAD", "80px", "Broadway", "#7200ff",
                320, 140
            );
            this.addChild(this._menuLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 320, 340, true
            );
            this.addChild(this._startButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);

            // add instructions button
            this._instructionsButton = new objects.Button("instructionsButton", 320, 440, true);
            this.addChild(this._instructionsButton);

            // Instructions button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            this._space.update();
            this._menuLabel.alpha ==1?this._menuLabel.alpha=0:this._menuLabel.alpha=1;
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }

        private _instructionsButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.INSTRUCTIONS;
            core.changeScene();
        }
    }
}