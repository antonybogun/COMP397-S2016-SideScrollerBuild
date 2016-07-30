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
    export class Instructions extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _space: objects.Space;
        private _instructionsLabel: objects.Label;
        private _startButton: objects.Button;
        private _returnButton: objects.Button;
        /**
         * Creates an instance of Instructions scene.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start(): void {


            let gameInstructions = [];
            let instructionsArray = [
                "You are a Zombie, infecting planets.",
                "Fly over the planet and infect it",
                "but be careful not to fly",
                "too close to the charged clouds. Your jetpack",
                "will be destroyed if cloud charge gets into it",
                "too many times. Steer with the mouse.",
                "May the dexterity be with you!"
            ];
            this._space = new objects.Space("space");
            this.addChild(this._space);
            for (var line = 0; line < instructionsArray.length; line++) {

                gameInstructions[line] = new createjs.Text(instructionsArray[line], "Broadway");
                gameInstructions[line].x = 10
                gameInstructions[line].y = 20 + (2 * line);

                this.addChild(new objects.Label(
                    instructionsArray[line], "22px", "Broadway", "#7200ff",
                    300, 40 * line + 40, true));
            }

            // Add Menu Label
            this.addChild(this._instructionsLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 320, 340, true
            );
            this.addChild(this._startButton);

            this._returnButton = new objects.Button(
                "returnButton", 320, 440, true
            );
            this.addChild(this._returnButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._returnButton.on("click", this._returnButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update(): void {
            this._space.update();
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
        private _returnButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        }
    }
}