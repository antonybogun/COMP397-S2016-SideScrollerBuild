/// <reference path="../core/game.ts"/>
/**
 * @author Anton Bogun
 * @author Liavontsi Brechka
 * @studentID 300863440
 * @studentID 300800345
 * @date July 29, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the side scroller
 */

module objects {
    /**
     * This abstract scene class is used to create individual scenes
     * 
     * @export
     * @abstract
     * @class Scene
     * @extends {createjs.Container}
     */
    export abstract class Scene extends createjs.Container {
        constructor() {
            super();

            this.Start();
        }

        /**
         * Add game objects to the scene in this method
         * 
         * @method Start
         * @returns {void}
         */
        public Start():void {
            core.stage.addChild(this);
        }

        /**
         * Updates Game objects in the Scene
         * 
         * @method Update
         * @returns {void} 
         */
        public Update():void {

        }
    }
}