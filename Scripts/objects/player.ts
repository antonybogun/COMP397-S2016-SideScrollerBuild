module objects {
    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {createjs.Bitmap}
     */
    export class Player extends createjs.Bitmap {
         // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _width:number;
        private _height:number;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++

        get width():number {
            return this._width;
        }

        set width(newWidth:number) {
            this._width = newWidth;
        }

        get height():number {
            return this._height;
        }

        set height(newHeight:number) {
            this._height = newHeight;
        }

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString:string) {
            super(core.assets.getResult(imageString))

            this.start();
        }

         /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.y >= (480 - (this.height * 0.5))) {
                this.y = (480 - (this.height * 0.5));
            }

            // check left bounds
            if(this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
            }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 32;
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update():void {
            // player to follow mouse
            this.y = core.stage.mouseY;
            this._checkBounds();
        }
    }
}