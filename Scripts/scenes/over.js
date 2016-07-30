/**
 * @author Anton Bogun
 * @author Liavontsi Brechka
 * @studentID 300863440
 * @studentID 300800345
 * @date July 29, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the side scroller
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Over() {
            _super.call(this);
        }
        /**
         *
         */
        Over.prototype.Start = function () {
            this._space = new objects.Space("space");
            this.addChild(this._space);
            // Add Menu Label
            this._gameOverLabel = new objects.Label("GAME OVER", "40px", "Broadway", "#7200ff", 320, 140, true);
            this.addChild(this._gameOverLabel);
            this._finalScoreLabel = new objects.Label("FINAL SCORE: " + core.score, "40px", "Broadway", "#7200ff", 320, 240, true);
            this.addChild(this._finalScoreLabel);
            // add the start button
            this._restartButton = new objects.Button("restartButton", 320, 380, true);
            this.addChild(this._restartButton);
            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Over.prototype.Update = function () {
            this._space.update();
            // scene updates happen here...
        };
        // EVENT HANDLERS ++++++++++++++++
        Over.prototype._restartButtonClick = function (event) {
            // Switch the scene
            core.currentLives = core.startingLives;
            core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map