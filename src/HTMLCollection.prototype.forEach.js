/** A Polyfill for {Array.prototype.forEach} for use on {HTMLCollection}
 */
if (!('forEach' in HTMLCollection.prototype)) {
    HTMLCollection.prototype.forEach = function(cb) {
        if (!(cb instanceof Function)) {
            return;
        }
        for (var i = 0; i < this.length; i++) {
            cb(this[i], i);
        }
    };
}
