/** Return a the value in {this} Array at a random index.
 */
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
};
