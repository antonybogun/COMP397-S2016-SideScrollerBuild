module objects {
    /**
     * This is the Cloud object used in the game
     *
     * @export
     * @class Asteroid
     * @extends {createjs.Bitmap}
     */
    export class Asteroid extends GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _dy:number;
        private _dx:number;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        get dy():number {
            return this._dy;
        }

        set dy(newDy:number) {
            this._dy = newDy;
        }

        get dx():number {
            return this._dx;
        }

        set dx(newDx:number) {
            this._dx = newDx;
        }

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString:string) {
            super(imageString);

            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        private _reset():void {
            this._dx = -Math.floor((Math.random() * 5) + 5); // horizontal speed
            this._dy = -Math.floor((Math.random() * 4) - 2); // vertical drift

            // get a random y location
            this.y = Math.floor((Math.random() * (480 - (this.width * 0.5))) + (this.width * 0.5));

            this.x = 640 + this.width;
        }

        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {
            if (this.x <= (0 - this.width)) {
                this._reset();
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
            this._reset();
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
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
            this.position.x = this.x;
            this.position.y = this.y;
        }
    }
}