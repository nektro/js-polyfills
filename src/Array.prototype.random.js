/** Return a the value in {this} Array at a random index.
 */
if (!('random' in Array.prototype)) {
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)];
    };
}
